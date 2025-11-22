document.addEventListener('DOMContentLoaded', () => {
    // هذا المتغير 'container' هو نفسه الـ div الذي يحمل كلاس .mindmap-v-tree
    const container = document.getElementById('mindmap-tree-container'); 
    
    if (!container || typeof mindmapData === 'undefined') {
        console.error("خطأ: لم يتم العثور على حاوية الخريطة أو البيانات.");
        if(container) container.innerHTML = "<p>خطأ: لم يتم تحميل البيانات.</p>";
        return;
    }

    // --- المهمة الأولى: بناء الـ HTML من البيانات ---
    // (هذه الدالة صحيحة ولا تحتاج تعديل)
    function buildTreeHTML(node) {
        if (!node.children || node.children.length === 0) {
            return `<li><span>${node.title}</span></li>`;
        }
        let childrenHTML = '<ul>';
        for (const child of node.children) {
            childrenHTML += buildTreeHTML(child);
        }
        childrenHTML += '</ul>';
        return `<li><span>${node.title}</span>${childrenHTML}</li>`;
    }

    // نبدأ بناء الشجرة من العقدة الجذرية
    container.innerHTML = `<ul>${buildTreeHTML(mindmapData)}</ul>`;


    // --- المهمة الثانية: إضافة منطق الطي والتوسيع (إصدار مُحسَّن وأكثر توافقية) ---
    
    // بدلاً من استخدام ":has()"، سنمر على جميع عناصر "li"
    // ونتحقق من وجود "ul" بداخلها يدوياً
    const allListItems = container.querySelectorAll('li');

    allListItems.forEach(li => {
        const span = li.querySelector('span:first-of-type');
        if (!span) return;

        // ابحث عن "ul" كابن مباشر
        let directChildUl = null;
        for (const child of li.children) {
            if (child.tagName === 'UL') {
                directChildUl = child;
                break;
            }
        }

        if (directChildUl) {
            // *** هذا فرع (Branch Node) ***
            
            // 1. تحديد الحالة الافتراضية
            const isRootNode = li.parentElement.parentElement.id === 'mindmap-tree-container';
            const isLevel1Node = li.parentElement.parentElement.parentElement.parentElement.id === 'mindmap-tree-container';

            if (isRootNode || isLevel1Node) {
                li.classList.add('expanded');
                li.classList.remove('collapsed');
            } else {
                li.classList.add('collapsed');
                li.classList.remove('expanded');
            }

            // 2. إضافة حدث النقر
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                li.classList.toggle('collapsed');
                li.classList.toggle('expanded');
            });

        } else {
            // *** هذه ورقة (Leaf Node) ***
            span.style.cursor = 'default';
            span.addEventListener('click', (e) => {
                e.stopPropagation(); // امنع النقر هنا من إغلاق الفرع الأب
            });
        }
    });
});