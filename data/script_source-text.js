/**
 * ملف التحكم الرئيسي للصفحة (script_source-text.js)
 * يحتوي على:
 * 1. منطق Alpine.js (للتنظيف والاختصار في HTML)
 * 2. تشغيل القائمة العلوية (Navbar)
 * 3. منع تداخل الأصوات (Audio Control)
 */

// --- أولاً: تعريف مكونات Alpine.js ---
document.addEventListener('alpine:init', () => {

    // 1. إعدادات الصفحة العامة (الخط، الثيم، النافذة الترحيبية)
    Alpine.data('pageSettings', () => ({
        fontSize: 18,
        darkMode: false,
        showIntroModal: true,

        init() {
            // الاستماع للأحداث القادمة من القائمة العلوية (Nav Tools)
            window.addEventListener('font-change', (e) => {
                this.fontSize = Math.max(10, this.fontSize + e.detail);
            });
            
            window.addEventListener('font-reset', () => {
                this.fontSize = 18;
            });

            window.addEventListener('theme-toggle', () => {
                this.darkMode = !this.darkMode;
            });
        },

        closeModal() {
            this.showIntroModal = false;
        }
    }));

    // 2. منطق القوائم المنسدلة (Accordion)
    // يمكن تمرير (true) لجعله مفتوحاً عند التحميل، أو تركه فارغاً ليكون مغلقاً
    Alpine.data('accordionItem', (initialState = false) => ({
        open: initialState,

        toggle() {
            this.open = !this.open;
        },

        // دالة مساعدة لتغيير أيقونة السهم تلقائياً
        get iconText() {
            return this.open ? '▼' : '◀';
        }
    }));
});


// --- ثانياً: الوظائف التي تعمل عند اكتمال تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', function() {

    // 1. تشغيل الناف بار (Navbar Loader)
    // نتأكد أولاً أن ملف nav-loader.js تم تحميله
    if (typeof loadNavbar === 'function') {
        loadNavbar({ 
            pageType: 'sub',
            showTools: true 
        });
    }

    // 2. التحكم في الأصوات (Audio Smart Control)
    // إيقاف أي صوت يعمل حالياً عند تشغيل صوت جديد
    const allAudios = document.querySelectorAll('audio');

    allAudios.forEach(audio => {
        audio.addEventListener('play', function() {
            allAudios.forEach(otherAudio => {
                // إذا لم يكن هو الصوت الذي ضغطنا عليه، قم بإيقافه
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });

});