// 1. المتغيرات والتعريفات
const totalQuestions = quizData.length;
const questionsPerPage = 1;
let currentPage = 1;
const totalPages = Math.ceil(totalQuestions / questionsPerPage);
let score = 0;
const maxScore = totalQuestions;
const pointsPerQuestion = 1;

// تمت إضافة هذا المتغير لتتبع حالة كشف الأسئلة
const questionStates = {};

// عناصر DOM
const quizPages = document.getElementById('quiz-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const scoreDisplay = document.getElementById('score-display'); 
const questionCounter = document.getElementById('question-counter'); 
const nextQuestionBtn = document.getElementById('next-question-btn');

// 2. ⭐️⭐️ دالة بناء هيكل السؤال (معدلة) ⭐️⭐️
function buildQuestionHTML(q, displayNumber) {
    const isMultiBlank = Array.isArray(q.answer);
    const numBlanks = isMultiBlank ? q.answer.length : 1;
    const answers = isMultiBlank ? q.answer : [q.answer];

    let inputFieldsHTML = '';
    if (isMultiBlank) {
        let inputsHTML = '';
        for (let i = 0; i < numBlanks; i++) {
            // تم إزالة "disabled" وإضافة "data-qid"
            inputsHTML += `
                <input id="blank-input-${q.id}-${i}" type="text" placeholder="اضغط هنا لكشف الإجابة #${i + 1}"
                    class="p-2 border border-gray-300 rounded-lg text-right mb-2 bg-green-50 review-mode"
                    data-correct-answer="${answers[i]}"
                    data-qid="${q.id}" data-index="${i}">
            `;
        }
        inputFieldsHTML = `
            <div class="inputs-column flex flex-col">
                ${inputsHTML}
            </div>
        `;
    } else {
         // تم إزالة "disabled" وإضافة "data-qid"
         inputFieldsHTML = `
            <input id="blank-input-${q.id}-0" type="text" placeholder="اضغط هنا لكشف الإجابة..."
                class="flex-1 p-2 border border-gray-300 rounded-lg text-right bg-green-50 review-mode"
                data-correct-answer="${answers[0]}"
                data-qid="${q.id}" data-index="0">
         `;
    }

    return `
        <div class="question-card fill-blank" id="q-card-${q.id}" style="background: var(--card-bg); border-radius: 0.75rem; box-shadow: var(--shadow-sm); padding: 1.5rem;">
            <div class="flex justify-between items-center">
                <span class="question-number" style="margin: 0; vertical-align: middle; height: 35px; line-height: 35px; display: inline-flex; align-items: center;">
                    السؤال ${displayNumber}
                </span>
            </div>
            <p class="question-text">
                ${q.text}
            </p>
            <div class="multi-blank-container">
                ${inputFieldsHTML}
            </div>
        </div>
    `;
}

// 3. ⭐️⭐️ دالة عرض الأسئلة (معدلة) ⭐️⭐️
function renderPage(page = currentPage) {
    if (!quizPages) return;
    quizPages.innerHTML = '';

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const questionsToShow = quizData.slice(startIndex, endIndex);

    let pageHTML = '';
    questionsToShow.forEach((q, index) => {
        // تهيئة حالة السؤال
        if (!questionStates[q.id]) {
            questionStates[q.id] = { scored: false };
        }
        const displayNumber = startIndex + index + 1;
        pageHTML += buildQuestionHTML(q, displayNumber);
    });
    quizPages.innerHTML = pageHTML;

    // إضافة مستمع النقر (Click) لكل حقل إدخال
    document.querySelectorAll(`#quiz-container input[type=text]`).forEach(input => {
        input.addEventListener('click', handleInputClick);
    });
}

// 4. ⭐️⭐️ وظيفة جديدة: معالج النقر على حقل الإدخال ⭐️⭐️
async function handleInputClick(event) {
    const inputElement = event.target;
    
    // منع إعادة التشغيل إذا تم كشفه
    if (inputElement.disabled) return; 

    // 🟢🟢🟢 الإصلاح: مسح الـ placeholder وتعطيل العنصر فوراً 🟢🟢🟢
    inputElement.disabled = true; // تعطيله فوراً لمنع النقرات المتعددة
    inputElement.placeholder = ''; // مسح النص المؤقت "اضغط هنا..."

    const qid = parseInt(inputElement.getAttribute('data-qid'));

    // بدء الكشف
    await typeLetterByLetter(inputElement);
    
    // التحقق إذا كانت جميع الفراغات في هذا السؤال قد كُشفت
    checkAllRevealed(qid);
}

// 5. ⭐️⭐️ وظيفة جديدة: الكاتب الآلي (حرف بحرف) ⭐️⭐️
function typeLetterByLetter(inputElement) {
    return new Promise(resolve => { 
        // (تم نقل التعطيل إلى دالة handleInputClick)

        const text = inputElement.getAttribute('data-correct-answer');
        
        if (!text || text.trim() === "") {
            inputElement.value = text || "";
            resolve();
            return;
        }

        let charIndex = 0;
        inputElement.value = ''; // إفراغ الحقل (وهو آمن الآن لأن الـ placeholder اختفى)

        const interval = setInterval(() => {
            if (charIndex < text.length) {
                inputElement.value = text.substring(0, charIndex + 1);
                charIndex++;
            } else {
                clearInterval(interval);
                resolve(); // إبلاغ بأن الكشف انتهى
            }
        }, 100); // السرعة: 100ms (1/10 ثانية) لكل حرف
    });
}

// 6. ⭐️⭐️ وظيفة جديدة: التحقق من كشف جميع الفراغات ⭐️⭐️
function checkAllRevealed(questionId) {
    const allInputs = document.querySelectorAll(`#q-card-${questionId} input[type=text]`);
    const allDone = Array.from(allInputs).every(input => input.disabled);

    if (allDone) {
        const state = questionStates[questionId];
        // منح النقطة وتحديث التقدم
        if (!state.scored) {
            state.scored = true;
            score++;
            updateProgress();
        }
        
        // تفعيل زر "السؤال التالي"
        if (nextQuestionBtn) {
            nextQuestionBtn.disabled = false;
            if (currentPage === totalQuestions) {
                nextQuestionBtn.textContent = 'عرض النتيجة';
            } else {
                nextQuestionBtn.textContent = 'السؤال التالي';
            }
            nextQuestionBtn.style.background = 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)';
        }
    }
}


// 7. دالة تغيير الصفحة (معدلة لوضع المراجعة)
function changePage(step) {
    if (currentPage === totalQuestions && step > 0) {
        updateProgress();
        showFinalResults();
        return;
    }

    const newPage = Math.min(Math.max(currentPage + step, 1), totalPages);
    if (newPage === currentPage) return;
    currentPage = newPage;
    renderPage(currentPage);

    window.scrollTo(0, 0);

    // تعطيل الزر أثناء تحميل السؤال الجديد
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.textContent = '...اكشف جميع الإجابات...';
        nextQuestionBtn.style.background = 'rgb(203, 213, 225)'; // Inactive background
    }
}

// (تم حذف الدوال القديمة: normalizeAr, updatePageInfo, checkBlank)

// 8. دالة تحديث شريط التقدم (معدلة)
function updateProgress() {
    const progress = (score / totalQuestions) * 100;
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = Math.round(progress) + '%';
    }
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
    if (questionCounter) {
        // يعرض الأسئلة التي تم مراجعتها من الإجمالي
        questionCounter.textContent = `${score} / ${totalQuestions}`;
    }
}

// 9. دالة عرض النتائج النهائية (معدلة لوضع المراجعة)
function showFinalResults() {
    const percentage = 100; // دائما 100% في المراجعة
    const finalScore = totalQuestions;
    let message = 'أكملت المراجعة!';
    let emoji = '🏆';

    if (quizPages) {
        quizPages.innerHTML = `
            <div class="text-center py-8 md:py-12 container-main" style="background: var(--card-bg); border-radius: 0.75rem; box-shadow: var(--shadow-sm);">
                <div class="text-5xl md:text-7xl mb-4 md:mb-6">${emoji}</div>
                <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">انتهت المراجعة!</h2>
                <p class="text-lg md:text-xl mb-6 md:mb-8">${message}</p>

                <div class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 md:p-8 mb-4 md:mb-6">
                    <p class="text-3xl md:text-5xl font-bold mb-1 md:mb-2">${finalScore} / ${totalQuestions}</p>
                    <p class="text-xl md:text-2xl">${percentage}%</p>
                </div>

                <button onclick="location.reload()"
                        class="btn-answer" style="background: linear-gradient(135deg, var(--color-success) 0%, var(--color-success-dark) 100%); color: white;">
                    🔄 إعادة المراجعة
                </button>
            </div>
        `;
    }

    // إخفاء زر "التالي" وأشرطة التقدم/النتيجة
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
    if (document.querySelector('.container-main.p-4.md:p-6.mb-1.md:mb-2')) {
        document.querySelector('.container-main.p-4.md:p-6.mb-1.md:mb-2').style.display = 'none';
    }
    if (document.querySelector('.container-main.p-4.md:p-6.mb-4.md:mb-6')) {
        document.querySelector('.container-main.p-4.md:p-6.mb-4.md:mb-6').style.display = 'none';
    }
}

// Shuffle function to randomize questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 10. دالة التهيئة الشاملة (معدلة)
function init() {
    shuffleArray(quizData);

    if (scoreDisplay) scoreDisplay.textContent = '0';
    if (questionCounter) questionCounter.textContent = `0 / ${totalQuestions}`;

    updateProgress(); 
    renderPage(); // سيعرض السؤال الأول

    // ضبط زر "التالي" ليكون معطلاً في البداية
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.textContent = '...اكشف جميع الإجابات...';
        nextQuestionBtn.style.background = 'rgb(203, 213, 225)'; // Inactive background
        nextQuestionBtn.addEventListener('click', () => changePage(1));
    }
}

// تنفيذ دالة التهيئة عند تحميل الـ DOM
document.addEventListener('DOMContentLoaded', () => {
     const titleEl = document.querySelector('.page-title-card h1');
     if(titleEl) {
         document.title = titleEl.textContent;
     }

     if (typeof quizData === 'undefined' || quizData.length === 0) {
        console.error("خطأ: لم يتم تحميل متغير 'quizData' أو أنه فارغ.");
        if(quizPages) {
             quizPages.innerHTML = "<p class='text-center text-red-500 font-bold'>خطأ فادح: لم يتم تحميل الأسئلة.</p>";
        }
        return;
     }

     init();
});

// 🟢 إضافة كلاس CSS لضبط تنسيق حقول المراجعة
document.head.insertAdjacentHTML('beforeend', `<style>
    input[type="text"].review-mode {
        cursor: pointer; /* تغيير شكل المؤشر ليدل أنه قابل للنقر */
    }
    input[type="text"].review-mode:disabled {
        background-color: #f0fdf4; /* أخضر فاتح جداً */
        color: #15803d; /* أخضر غامق */
        font-weight: bold;
        opacity: 1;
        -webkit-text-fill-color: #15803d; /* لمتصفحات WebKit */
        cursor: default; /* إرجاع المؤشر للشكل الافتراضي بعد الكشف */
    }
    html.dark body input[type="text"].review-mode:disabled {
        background-color: #052e16; /* أخضر غامق جداً */
        color: #bbf7d0; /* أخضر فاتح */
        -webkit-text-fill-color: #bbf7d0;
    }
</style>`);