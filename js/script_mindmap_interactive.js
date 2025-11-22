/**
 * script_mindmap_interactive.js
 * - يرسم الخريطة
 * - يجعل العقد مطوية افتراضياً
 * - يتيح النقر على النصوص للتوسيع
 */

document.addEventListener('DOMContentLoaded', function() {
    renderMindmap();
});

function renderMindmap() {
    const container = document.getElementById('markmap-container');
    
    if (typeof mindmapData === 'undefined') {
        console.error("Error: mindmapData is undefined.");
        container.innerHTML = '<h3 style="text-align:center; margin-top:50px; color:red;">خطأ: لم يتم تحميل البيانات.</h3>';
        return;
    }

    // 1. تحويل البيانات مع خاصية الطي (Fold)
    function transformData(node, depth = 0) {
        // depth 0 (الجذر) مفتوح، الباقي مطوي
        const foldStatus = depth === 0 ? 0 : 1; 

        return {
            content: node.title, 
            children: node.children ? node.children.map(c => transformData(c, depth + 1)) : [],
            payload: { fold: foldStatus } 
        };
    }

    try {
        const rootData = transformData(mindmapData);
        const { Markmap } = window.markmap;
        const svgEl = document.querySelector('#markmap');
        
        const options = {
            autoFit: true,
            duration: 500,
        };

        // إنشاء الخريطة
        const mm = Markmap.create(svgEl, options, rootData);
        
        // تحديث الحجم عند تغيير حجم النافذة
        window.addEventListener('resize', () => { mm.fit(); });

        // ============================================================
        // جديد: تفعيل النقر على النص للتوسيع (Click Text to Expand)
        // ============================================================
        svgEl.addEventListener('click', function(e) {
            // نبحث عن العنصر الذي تم نقره
            let target = e.target;

            // نصعد في شجرة DOM حتى نجد "المجموعة" <g> التي تحتوي العقدة
            // العقد في markmap تكون داخل وسم <g> يحتوي على <circle> و <foreignObject>
            while (target && target !== svgEl) {
                if (target.tagName === 'g') {
                    // وجدنا المجموعة، نبحث عن الدائرة داخلها
                    const circle = target.querySelector('circle');
                    
                    // إذا وجدنا دائرة، والحدث لم يكن نقراً على الدائرة نفسها (لتجنب التكرار)
                    if (circle && e.target !== circle) {
                        // نقوم بمحاكاة نقرة على الدائرة
                        // لأن مكتبة Markmap تربط حدث الفتح/الإغلاق بالدائرة فقط
                        const clickEvent = new MouseEvent('click', {
                            view: window,
                            bubbles: true,
                            cancelable: true
                        });
                        circle.dispatchEvent(clickEvent);
                    }
                    return; // انتهينا
                }
                target = target.parentElement;
            }
        });
        // ============================================================

    } catch (error) {
        console.error("Error rendering markmap:", error);
    }
}