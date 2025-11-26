// المحتوى الكامل والجديد لملف: js/nav-loader.js

function loadNavbar(options = {}) {
  const { pageType = 'root', showTools = false } = options;

  const rootPath = (pageType === 'root') ? '.' : '..';
  const pagePath = (pageType === 'root') ? 'pages/' : '';

  // --- (1) روابط سطح المكتب (للتصميم الأخضر) ---
  const desktopLinksHtml = `
    <a href="${rootPath}/index.html" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">الرئيسية</a>
    <a href="${pagePath}source-text.html" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">النص</a>
    <a href="${pagePath}source-text-summary.html" class="px-3 py-2 text-sm font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">الملخص</a>	
    <a href="${pagePath}mindmap.html" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">خريطة ذهنية</a>
    <a href="${pagePath}mindmap_interactive.html" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">خريطة ذهنية تفاعلية</a>
     <a href="${pagePath}bio-events.html" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 transform hover:-translate-y-0.5">الخط الزمني</a>
  `;

  // --- (2) القائمة المنسدلة للامتحانات (سطح المكتب) ---
  const examDropdownDesktop = `
    <div class="relative">
      <button id="exams-dropdown-toggle" class="px-3 py-2 text-base font-bold text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200 flex items-center gap-1">
        <span>امتحانات</span>
        <svg id="exams-dropdown-arrow" class="w-4 h-4 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="exams-dropdown-menu" 
           class="hidden absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white overflow-hidden z-50">
        <a href="${pagePath}qz-true-false.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">صواب/خطأ</a>
        <a href="${pagePath}qz-mc-in.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">اختيار تفاعلي</a>
        <a href="${pagePath}qz-fill-blank.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">املأ الفراغ</a>
        <a href="${pagePath}card-flip.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">بطاقات مراجعة</a>
        <a href="${pagePath}card-comparison.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">بطاقات مقارنة</a>
        <a href="${pagePath}qz-comparison.html" class="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-green-50 transition-colors">جدول مقارنة</a>
      </div>
    </div>
  `;

  // --- (3) روابط الموبايل ---
  const mobileLinksHtml = `
    <a href="${rootPath}/index.html" class="block px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10">الرئيسية</a>
    <a href="${pagePath}source-text.html" class="block px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10">النص</a>
    <a href="${pagePath}source-text-summary.html" class="block px-4 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">الملخص</a>
    <a href="${pagePath}mindmap.html" class="block px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10">خريطة ذهنية</a>
    <a href="${pagePath}mindmap_interactive.html" class="block px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10">اخريطة ذهنية تفاعلية</a>
    <a href="${pagePath}bio-events.html" class="block px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10">الخط الزمني</a>    <div class="border-t border-white border-opacity-20">
      <button id="mobile-exams-dropdown-toggle" class="w-full text-right px-4 py-3 text-base font-bold text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-between">
        <span>امتحانات</span>
        <svg id="mobile-exams-dropdown-arrow" class="w-4 h-4 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="mobile-exams-dropdown-menu" 
           class="hidden bg-white bg-opacity-10 overflow-hidden">
        <a href="${pagePath}qz-true-false.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">صواب/خطأ</a>
        <a href="${pagePath}qz-mc-in.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">اختيار تفاعلي</a>
        <a href="${pagePath}qz-fill-blank.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">املأ الفراغ</a>
        <a href="${pagePath}card-flip.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">بطاقات مراجعة</a>
        <a href="${pagePath}card-comparison.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">بطاقات مقارنة</a>
        <a href="${pagePath}qz-comparison.html" class="block px-6 py-2 text-sm font-bold text-white hover:bg-white hover:bg-opacity-10">جدول مقارنة</a>
      </div>
    </div>
  `;

  // --- (4) بناء هيكل الـ Navbar ---
  const navHtml = `
<nav x-data="{ open: false, showTools: ${showTools} }" 
     class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] z-50 p-2">

    <!-- Desktop Navbar -->
    <div class="hidden md:flex justify-between items-center rounded-xl p-2 w-full bg-gradient-to-r from-green-600 to-emerald-700">

        <div class="flex justify-center items-center space-x-2 space-x-reverse">
            ${desktopLinksHtml}
            ${examDropdownDesktop}
        </div>

        <div x-show="showTools" style="display: none; margin-right: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.25rem;">
                <button class="btn" id="increase" title="تكبير الخط" @click="$dispatch('font-change', 2)" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-weight: bold; transition: background 0.2s;">A+</button>
                <button class="btn" id="reset" title="إعادة تعيين الخط" @click="$dispatch('font-reset')" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-weight: bold; transition: background 0.2s;">A</button>
                <button class="btn" title="تصغير الخط" @click="$dispatch('font-change', -2)" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-weight: bold; transition: background 0.2s;">A−</button>
                <button class="icon-btn" title="تبديل الوضع الداكن" @click="$dispatch('theme-toggle')" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 6px 8px; cursor: pointer;">🌒</button>
            </div>
        </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="md:hidden flex justify-between items-center">
        
        <!-- Menu Button (Right Side) -->
        <button @click="open = !open" class="flex items-center px-4 py-2 text-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-200 bg-gradient-to-r from-green-600 to-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="font-bold text-white">القائمة</span>
        </button>

        <!-- Mobile Tools (Left Side) -->
        <div x-show="showTools" style="display: none;">
            <div style="display: flex; align-items: center; gap: 0.25rem;">
                <button class="btn" id="increase-mobile" title="تكبير الخط" @click="$dispatch('font-change', 2)" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 4px 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem;">A+</button>
                <button class="btn" id="reset-mobile" title="إعادة تعيين الخط" @click="$dispatch('font-reset')" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 4px 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem;">A</button>
                <button class="btn" id="decrease-mobile" title="تصغير الخط" @click="$dispatch('font-change', -2)" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 4px 8px; cursor: pointer; font-weight: bold; font-size: 0.75rem;">A−</button>
                <button class="icon-btn" title="تبديل الوضع الداكن" @click="$dispatch('theme-toggle')" style="background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 5px; padding: 4px 6px; cursor: pointer; font-size: 0.875rem;">🌒</button>
            </div>
        </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div x-show="open" @click.away="open = false" 
         x-transition:enter="transition ease-out duration-200" 
         x-transition:enter-start="opacity-0 transform -translate-y-2" 
         x-transition:enter-end="opacity-100 transform translate-y-0" 
         x-transition:leave="transition ease-in duration-150" 
         x-transition:leave-start="opacity-100 transform translate-y-0" 
         x-transition:leave-end="opacity-0 transform -translate-y-2"
         class="md:hidden absolute left-1/2 transform -translate-x-1/2 w-64 mt-2 rounded-lg shadow-xl z-10 bg-gradient-to-r from-green-600 to-emerald-700"
         style="display: none;">
        ${mobileLinksHtml}
    </div>
</nav>
  `;
  
  // حقن الكود
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navHtml;
  } else {
    console.error('لم يتم العثور على العنصر النائب للـ Navbar. تأكد من وجود <div id="navbar-placeholder"></div>');
  }

}

/**
 * Global event listener for handling dynamic navbar interactions like dropdowns.
 */
document.addEventListener('click', function(e) {
    // --- Desktop Exams Dropdown ---
    const desktopToggleBtn = e.target.closest('#exams-dropdown-toggle');
    if (desktopToggleBtn) {
        const menu = document.getElementById('exams-dropdown-menu');
        const arrow = document.getElementById('exams-dropdown-arrow');
        if (menu) {
            menu.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');
        }
        e.preventDefault();
        return; // Stop further processing
    }

    // --- Mobile Exams Dropdown ---
    const mobileToggleBtn = e.target.closest('#mobile-exams-dropdown-toggle');
    if (mobileToggleBtn) {
        const menu = document.getElementById('mobile-exams-dropdown-menu');
        const arrow = document.getElementById('mobile-exams-dropdown-arrow');
        if (menu) {
            menu.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');
        }
        e.preventDefault();
        return; // Stop further processing
    }

    // --- Close dropdowns if clicking outside ---
    const desktopMenu = document.getElementById('exams-dropdown-menu');
    if (desktopMenu && !desktopMenu.classList.contains('hidden') && !e.target.closest('#exams-dropdown-toggle')) {
        desktopMenu.classList.add('hidden');
        document.getElementById('exams-dropdown-arrow').classList.remove('rotate-180');
    }
    // Note: The mobile menu is handled by Alpine's @click.away, so we don't need to close it manually here.
    // If we were to remove Alpine completely, we would add a similar check for the mobile menu.
});
