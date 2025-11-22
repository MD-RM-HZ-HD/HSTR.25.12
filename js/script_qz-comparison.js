// 1. المتغيرات والتعريفات
const totalQuestions = quizData.length;
const questionsPerPage = 1;
let currentPage = 1;
const totalPages = Math.ceil(totalQuestions / questionsPerPage);
let score = 0; // سيصبح عداداً للأسئلة المراجعة

// عناصر DOM
const quizPages = document.getElementById('quiz-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const scoreDisplay = document.getElementById('score-display'); 
const questionCounter = document.getElementById('question-counter');
const nextQuestionBtn = document.getElementById('next-question-btn');

// 2. ⭐️⭐️ دالة بناء هيكل السؤال (معدلة لوضع المراجعة) ⭐️⭐️
function buildQuestionHTML(q, displayNumber) {
    let inputsA = '';
    let inputsB = '';

    // إنشاء حقول الإدخال بناءً على المعايير
    q.criteria.forEach((criterion, index) => {
        // تم إضافة data-label="${criterion.label}"
        inputsA += `
            <textarea id="blank-input-${q.id}-A-${index}" 
                   placeholder="اكتب (${criterion.label}) هنا..."
                   class="p-2 border border-gray-300 rounded-lg text-right mb-2 bg-green-50 resize-none min-h-[75px] review-mode"
                   rows="3"
                   data-correct-answer="${criterion.answerA}"
                   data-label="${criterion.label}"
                   data-index="${index}" data-side="A" disabled></textarea>
        `;
        // تم إضافة data-label="${criterion.label}"
        inputsB += `
            <textarea id="blank-input-${q.id}-B-${index}" 
                   placeholder="اكتب (${criterion.label}) هنا..."
                   class="p-2 border border-gray-300 rounded-lg text-right mb-2 bg-green-50 resize-none min-h-[75px] review-mode"
                   rows="3"
                   data-correct-answer="${criterion.answerB}"
                   data-label="${criterion.label}"
                   data-index="${index}" data-side="B" disabled></textarea>
        `;
    });

    // بناء البطاقة الكاملة
    return `
        <div class="question-card fill-blank container-main" id="q-card-${q.id}" style="padding: 1rem 1.5rem 1.5rem;">
            
            <div class="flex justify-between items-center mb-4">
                
                <div class="q-tag">
                    <span class="q-tag-word">السؤال</span>
                    <span class="q-tag-number">${displayNumber}</span>
                </div>
                
                <h2 class="question-title-highlight text-lg md:text-xl font-bold text-right" style="color: var(--text); flex-grow: 1; margin: 0 1rem; line-height: 1.6;">
                    ${q.title}
                </h2>
                
            </div>

            <div class="grid grid-cols-2 gap-4">
                
                <div class="comparison-box">
                    <h3 class="text-xl font-bold mb-3 text-center card-title-review" style="color: var(--color-success-text);">${q.caseA_label}</h3>
                    <div class="flex flex-col gap-3">
                        ${inputsA}
                    </div>
                </div>

                <div class="comparison-box">
                    <h3 class="text-xl font-bold mb-3 text-center card-title-review" style="color: var(--color-danger-text);">${q.caseB_label}</h3>
                    <div class="flex flex-col gap-3">
                        ${inputsB}
                    </div>
                </div>
            </div>

            <p id="blank-feedback-${q.id}" class="mt-4 text-center font-bold" style="display: none;"></p>
        </div>
    `;
}

// 3. دالة عرض الأسئلة (معدلة)
function renderPage(page = currentPage) {
    if (!quizPages) return;
    quizPages.innerHTML = '';

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const questionsToShow = quizData.slice(startIndex, endIndex);

    questionsToShow.forEach((q, index) => {
        const displayNumber = startIndex + index + 1;
        quizPages.innerHTML += buildQuestionHTML(q, displayNumber);
        
        // تفعيل وضع المراجعة (الكاتب الآلي)
        startReviewMode(q.id);
    });
}

// 4. ⭐️⭐️ وظيفة الكاتب الآلي الجديدة (متسلسلة) ⭐️⭐️
async function startReviewMode(questionId) {
    const questionData = quizData.find(q => q.id === questionId);
    if (!questionData) return;

    // المرور على كل معيار (صف) بالتسلسل
    for (let i = 0; i < questionData.criteria.length; i++) {
        const textareaA = document.getElementById(`blank-input-${questionId}-A-${i}`);
        const textareaB = document.getElementById(`blank-input-${questionId}-B-${i}`);

        // انتظار انتهاء العمود "أ" (مع إرسال المعيار)
        if (textareaA) {
            await typeWordByWord(textareaA, textareaA.getAttribute('data-correct-answer'), textareaA.getAttribute('data-label'));
        }
        // ثم انتظار انتهاء العمود "ب" (مع إرسال المعيار)
        if (textareaB) {
            await typeWordByWord(textareaB, textareaB.getAttribute('data-correct-answer'), textareaB.getAttribute('data-label'));
        }
    }

    // عند انتهاء جميع الحقول، يتم تفعيل الزر التالي
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = false;
        if (currentPage === totalQuestions) {
            nextQuestionBtn.textContent = 'عرض النتيجة';
        } else {
            nextQuestionBtn.textContent = 'السؤال التالي';
        }
        nextQuestionBtn.style.background = 'linear-gradient(135deg, var(--color-success) 0%, var(--color-success-dark) 100%)';
    }
}

// 5. ⭐️⭐️ وظيفة مساعد الكاتب الآلي (معدلة لإضافة المعيار والسرعة) ⭐️⭐️
function typeWordByWord(textarea, text, label) {
    return new Promise(resolve => {
        const labelPrefix = `${label}: `;
        
        if (!text || text.trim() === "") {
            textarea.value = labelPrefix + (text || "");
            resolve();
            return;
        }
        
        const words = text.split(' ').filter(w => w.length > 0);
        let wordIndex = 0;
        textarea.value = labelPrefix; 

        if (words.length === 0) {
            textarea.value = labelPrefix + text;
            resolve(); // Resolve immediately
            return;
        }

        const interval = setInterval(() => {
            if (wordIndex < words.length) {
                textarea.value = labelPrefix + words.slice(0, wordIndex + 1).join(' ');
                wordIndex++;
            } else {
                clearInterval(interval);
                resolve(); // Resolve when done
            }
        }, 200); // السرعة 200ms
    });
}


// 6. دالة تغيير الصفحة (معدلة)
function changePage(step) {
    // التحقق إذا كانت الصفحة الأخيرة
    if (currentPage === totalQuestions && step > 0) {
        score = totalQuestions; // التأكد من اكتمال النتيجة
        updateProgress();
        showFinalResults();
        return;
    }

    const newPage = Math.min(Math.max(currentPage + step, 1), totalPages);
    if (newPage === currentPage) return;
    currentPage = newPage;
    
    // تحديث النتيجة بناءً على الصفحة الحالية
    score = newPage; // تم تعديلها لتعكس الصفحة الجديدة
    updateProgress();
    
    renderPage(currentPage); // سيقوم بعرض السؤال وبدء الأنيميشن
    window.scrollTo(0, 0);

    // تعطيل الزر أثناء تحميل وعرض الأنيميشن
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.textContent = '...يتم عرض الإجابات...';
        nextQuestionBtn.style.background = ''; // يعود للتنسيق الافتراضي
    }
}

// 7. دالة تحديث شريط التقدم (معدلة)
function updateProgress() {
    // أصبح "score" يمثل رقم الصفحة الحالية التي تمت مراجعتها
    const progress = (score / totalQuestions) * 100;
    
    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = Math.round(progress) + '%';
    if (scoreDisplay) scoreDisplay.textContent = score; // يعرض رقم الصفحة
    if (questionCounter) questionCounter.textContent = `${score} / ${totalQuestions}`; // يعرض رقم الصفحة
}

// 8. دالة عرض النتائج النهائية
function showFinalResults() {
    const message = 'أكملت المراجعة!';
    const emoji = '🏆'; 

    if (quizPages) {
        quizPages.innerHTML = `
            <div class="text-center py-8 md:py-12 container-main">
                <div class="text-5xl md:text-7xl mb-4 md:mb-6">${emoji}</div>
                <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">${message}</h2>
                <div class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 md:p-8 mb-4 md:mb-6">
                    <p class="text-3xl md:text-5xl font-bold mb-1 md:mb-2">${totalQuestions} / ${totalQuestions}</p>
                    <p class="text-xl md:text-2xl">100%</p>
                </div>
                <button onclick="location.reload()"
                        class="btn-answer" style="background: linear-gradient(135deg, var(--color-success) 0%, var(--color-success-dark) 100%); color: white;">
                    🔄 إعادة المراجعة
                </button>
            </div>
        `;
    }
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
    if (document.querySelector('.progress-bar')) document.querySelector('.progress-bar').parentElement.style.display = 'none';
    
    // إخفاء شريط النتيجة العلوي بالكامل
    const scoreBar = document.querySelector('.container-main.flex.justify-between.items-center');
    if (scoreBar) scoreBar.style.display = 'none';
}

// 9. دالة خلط الأسئلة
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 10. دالة التهيئة الشاملة (معدلة)
function init() {
    shuffleArray(quizData);
    score = 1; // نبدأ بالسؤال الأول
    updateProgress(); // تحديث فوري لإظهار 1 / 84
    renderPage();
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true; // يتم تعطيله أولاً
        nextQuestionBtn.textContent = '...يتم عرض الإجابات...';
        nextQuestionBtn.addEventListener('click', () => changePage(1));
    }
}

// تنفيذ دالة التهيئة
document.addEventListener('DOMContentLoaded', () => {
     const titleEl = document.querySelector('.page-title-card h1');
     if(titleEl) document.title = titleEl.textContent;
     if (typeof quizData === 'undefined' || quizData.length === 0) {
        if(quizPages) quizPages.innerHTML = "<p class='text-center text-red-500 font-bold'>خطأ: لم يتم تحميل الأسئلة.</p>";
        return;
     }
     init();
});

// إضافة كلاس CSS لضبط التنسيق
document.head.insertAdjacentHTML('beforeend', `<style>
    /* ستايل زر رقم السؤال الجديد (ليطابق الصورة) */
    .q-tag {
        background-color: #f97316; /* Orange-600 */
        color: white;
        border-radius: 0.75rem; /* 12px */
        padding: 0.5rem 0.75rem;
        text-align: center;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        line-height: 1.2;
        min-width: 60px; /* عرض بسيط لضمان الشكل */
    }
    .q-tag-word {
        font-size: 0.75rem; /* 12px */
        opacity: 0.9;
    }
    .q-tag-number {
        font-size: 1.125rem; /* 18px */
    }

    /* تعديل خط الأجوبة في الهاتف */
    @media (max-width: 640px) {
        textarea.review-mode:disabled {
            font-size: 0.875rem; /* 14px */
            min-h-[60px]; /* تقليل الارتفاع الأدنى */
        }
        
        /* تعديل خط العناوين الداخلية في الهاتف */
        .card-title-review {
            font-size: 1.125rem; /* 18px */
        }
    }

    /* ستايل أساسي للـ textarea */
    textarea.review-mode:disabled {
        background-color: #f0fdf4; /* أخضر فاتح جداً */
        color: #15803d; /* أخضر غامق */
        font-weight: bold;
        opacity: 1;
        -webkit-text-fill-color: #15803d; /* لمتصفحات WebKit */
    }
    body.dark textarea.review-mode:disabled {
        background-color: #052e16; /* أخضر غامق جداً */
        color: #bbf7d0; /* أخضر فاتح */
        -webkit-text-fill-color: #bbf7d0;
    }
</style>`);