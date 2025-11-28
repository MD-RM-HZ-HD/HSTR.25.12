/**
 * script_mindmap.js
 * المنطق الخاص بالخريطة الذهنية العمودية
 * - تظهر مفتوحة بالكامل تلقائياً
 * - يدعم النقر للفتح/الطي
 * - يدعم أزرار "توسيع الكل" و "طي الكل" في الشريط العلوي
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mindmap-tree-container');
    
    // 1. حقن ستايل الإخفاء والإظهار برمجياً
    const style = document.createElement('style');
    style.innerHTML = `
        .mindmap-v-tree li.collapsed > ul { display: none !important; }
        /* رفع النص فوق الخطوط لضمان استجابة النقر */
        .mindmap-v-tree li > span { cursor: pointer; position: relative; z-index: 10; } 
        .mindmap-v-tree li > span:hover { transform: scale(1.02); }
    `;
    document.head.appendChild(style);

    // 2. التحقق من وجود البيانات والحاوية
    if (!container) return;
    if (typeof mindmapData === 'undefined') {
        container.innerHTML = `<div style="text-align:center; padding:20px; color:red; font-weight:bold;">
            خطأ: المتغير mindmapData غير موجود.<br>
            تأكد أن ملف data_mindmap.js يبدأ بـ: const mindmapData = ...
        </div>`;
        return;
    }

    // 3. دالة لبناء الهيكل (HTML)
    function buildTreeHTML(node) {
        const hasChildren = node.children && node.children.length > 0;
        let html = `<li>`;
        
        const cssClass = hasChildren ? 'branch-node' : 'leaf-node';
        // الأيقونة الافتراضية الآن هي (▼) لأن كل شيء مفتوح
        const icon = hasChildren ? '<span class="toggle-icon" style="font-size:0.8em; opacity:0.7; margin-left:5px;">▼</span>' : '';
        
        html += `<span class="${cssClass}">${node.title} ${icon}</span>`;
        
        if (hasChildren) {
            html += `<ul>`;
            node.children.forEach(child => {
                html += buildTreeHTML(child);
            });
            html += `</ul>`;
        }
        
        html += `</li>`;
        return html;
    }

    // 4. رسم الشجرة داخل الصفحة
    container.innerHTML = `<ul class="root-ul">${buildTreeHTML(mindmapData)}</ul>`;

    // 5. ضبط الحالة الأولية (جعل الكل مفتوحاً)
    const allListItems = container.querySelectorAll('li');
    allListItems.forEach(li => {
        // نمر على كل العناصر لنتأكد من عدم وجود كلاس الإخفاء
        if (li.querySelector('ul')) {
            li.classList.remove('collapsed'); // إزالة الإخفاء (للتأكيد)
            
            // ضبط الأيقونة على وضع الفتح (▼)
            const iconSpan = li.querySelector('.toggle-icon');
            if(iconSpan) iconSpan.innerText = '▼'; 
        }
    });

    // 6. تفعيل النقر الفردي (Collapse/Expand) عند رغبة المستخدم في الإغلاق
    container.addEventListener('click', function(e) {
        const targetSpan = e.target.closest('li > span');
        
        if (targetSpan && container.contains(targetSpan)) {
            const li = targetSpan.parentElement;
            
            if (li.querySelector('ul')) {
                e.preventDefault(); 
                e.stopPropagation(); 
                
                // تبديل الحالة
                li.classList.toggle('collapsed');
                
                // تحديث الأيقونة
                const iconSpan = targetSpan.querySelector('.toggle-icon');
                if (iconSpan) {
                    iconSpan.innerText = li.classList.contains('collapsed') ? '◀' : '▼';
                }
            }
        }
    });

    // ==========================================
    // 7. الاستجابة لأحداث الشريط العلوي (Navbar)
    // ==========================================

    window.addEventListener('expand-all', () => {
        const allLis = container.querySelectorAll('li');
        allLis.forEach(li => {
            if (li.querySelector('ul')) {
                li.classList.remove('collapsed');
                const icon = li.querySelector('.toggle-icon');
                if(icon) icon.innerText = '▼'; 
            }
        });
    });

    window.addEventListener('collapse-all', () => {
        const allLis = container.querySelectorAll('li');
        allLis.forEach(li => {
            // نغلق الفروع (ما عدا الجذر)
            if (li.querySelector('ul') && !li.parentElement.classList.contains('root-ul')) {
                li.classList.add('collapsed');
                const icon = li.querySelector('.toggle-icon');
                if(icon) icon.innerText = '◀';
            }
        });
    });
});