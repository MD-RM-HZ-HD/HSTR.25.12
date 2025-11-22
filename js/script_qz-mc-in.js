// المتغيرات العامة
let currentQuestionIndex = 0;
let score = 0;
let nextQuestionTimer; // ⬅️ متغير للاحتفاظ بمؤقت السؤال التالي
let idleAnimationTimer = null; // ⬅️ مؤقت لحركة الأزرار
let currentHighlightIndex = 0; // ⬅️ مؤشر للزر المضيء

// عناصر DOM
const quizContainer = document.getElementById('quiz-container');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const nextButton = document.getElementById('next-question-btn');

// دالة تحديث شريط التقدم
function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
}

// ⬅️ دالة لإيقاف حركة الأزرار
function stopIdleAnimation() {
    if (idleAnimationTimer) {
        clearInterval(idleAnimationTimer);
        idleAnimationTimer = null;
    }
    // إزالة الهايلايت من جميع الأزرار عند الإيقاف
    document.querySelectorAll('.btn-option').forEach(btn => {
        btn.classList.remove('btn-idle-highlight'); 
    });
}

// ⬅️ دالة لبدء حركة الأزرار
function startIdleAnimation() {
    stopIdleAnimation(); // إيقاف أي حركة سابقة
    currentHighlightIndex = 0;
    const buttons = document.querySelectorAll('.btn-option');
    if (buttons.length === 0) return;

    idleAnimationTimer = setInterval(() => {
        // إزالة الهايلايت من جميع الأزرار
        buttons.forEach(btn => btn.classList.remove('btn-idle-highlight'));
        
        if (document.querySelectorAll('.btn-option:disabled').length > 0) {
            stopIdleAnimation(); // إيقاف الحركة إذا كانت الأزرار معطلة (تمت الإجابة)
            return;
        }

        // إضافة الهايلايت للزر الحالي
        buttons[currentHighlightIndex].classList.add('btn-idle-highlight');
        
        // الانتقال للزر التالي
        currentHighlightIndex = (currentHighlightIndex + 1) % buttons.length;
    }, 700); // تغيير اللون كل 700 مللي ثانية (يمكنك تغيير هذا الرقم)
}


// دالة تفعيل زر "السؤال التالي"
function enableNextButton() {
    nextButton.disabled = false;
}

// دالة تعطيل زر "السؤال التالي"
function disableNextButton() {
    nextButton.disabled = true;
    nextButton.textContent = 'أجب على السؤال للانتقال إلى التالي';
}

// دالة الانتقال للسؤال التالي (الزر اليدوي)
window.nextQuestion = function() {
    clearTimeout(nextQuestionTimer); // ⬅️ إلغاء المؤقت التلقائي عند الضغط اليدوي
    stopIdleAnimation();
    disableNextButton();
    currentQuestionIndex++;
    renderQuestion(); 
}


// دالة عرض السؤال (تحديث للتحكم بزر التالي)
function renderQuestion() {
    if (questions.length === 0) {
        quizContainer.innerHTML = `
            <div class="text-center py-12">
                <p class="text-xl text-red-600 font-semibold">⚠️ لا توجد أسئلة متاحة</p>
            </div>
        `;
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        showFinalResults();
        return;
    }

    const currentQ = questions[currentQuestionIndex];
    
    disableNextButton();

// بناء أزرار الخيارات
            let optionsHtml = '';
            currentQ.options.forEach((option, index) => {
                optionsHtml += `
                    <button onclick="submitAnswer(${index})" 
                            class="btn-answer btn-option"
                            id="btn-option-${index}">
                        <span class="btn-text">${option}</span>
                    </button>
                `;
            });

    quizContainer.innerHTML = `
        <div class="question-card mc-inline">
            <span class="question-number">
                السؤال ${currentQuestionIndex + 1}
            </span>
            
            <p class="question-text">
                ${currentQ.q}
            </p>
            
            <div class="grid grid-cols-2 gap-3 md:gap-4">
                ${optionsHtml}
            </div>
        </div>
        
        <div id="feedback" class="hidden mt-4 md:mt-6"></div>
    `;

    questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    scoreDisplay.textContent = score;
    startIdleAnimation(); // ⬅️ بدء حركة الأزرار
}

// دالة معالجة الإجابة (تفعيل الزر اليدوي والاحتفاظ بالمؤقت التلقائي)
window.submitAnswer = function(userAnswerIndex) {
    stopIdleAnimation(); // ⬅️ إيقاف حركة الأزرار عند الإجابة
    const currentQ = questions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback');
    
    // تعطيل جميع الأزرار
    const buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = userAnswerIndex === currentQ.correctIndex;
    
    // تحديد الزر الصحيح والزر الذي تم اختياره
    const correctButton = document.getElementById(`btn-option-${currentQ.correctIndex}`);
    const selectedButton = document.getElementById(`btn-option-${userAnswerIndex}`);

    // تلوين الأزرار
    correctButton.classList.add('btn-correct');
    if (!isCorrect) {
        selectedButton.classList.add('btn-incorrect');
    }


    if (isCorrect) {
        score++;
        feedbackDiv.className = 'feedback-box feedback-correct';
        feedbackDiv.innerHTML = `
            <div class="text-center mb-2 md:mb-3">
                <span class="text-3xl md:text-4xl">✅</span>
                <p class="text-xl md:text-2xl font-bold mt-1 md:mt-2">إجابة صحيحة!</p>
            </div>
            <div class="text-right">
                <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">📝 الشرح:</p>
                <p class="text-sm md:text-base">${currentQ.rationale}</p>
            </div>
        `;
    } else {
        feedbackDiv.className = 'feedback-box feedback-incorrect';
        feedbackDiv.innerHTML = `
            <div class="text-center mb-2 md:mb-3">
                <span class="text-3xl md:text-4xl">❌</span>
                <p class="text-xl md:text-2xl font-bold mt-1 md:mt-2">إجابة خاطئة</p>
            </div>
            <div class="text-right">
                <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">✔️ الإجابة الصحيحة:</p>
                <p class="text-sm md:text-base">${currentQ.options[currentQ.correctIndex]}</p>
                <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">📝 الشرح:</p>
                <p class="text-sm md:text-base">${currentQ.rationale}</p>
            </div>
        `;
    }

    feedbackDiv.classList.remove('hidden');
    scoreDisplay.textContent = score;
    updateProgress();
    startNextQuestionTimer();
}

// ⬅️ دالة جديدة: بدء مؤقت الانتقال التلقائي للسؤال التالي
function startNextQuestionTimer() {
    enableNextButton();
    let countdown = 15;
    const baseText = (currentQuestionIndex === questions.length - 1) ? 'عرض النتيجة' : 'السؤال التالي';
    nextButton.textContent = `${baseText} (${countdown})`;

    // مؤقت لتحديث نص الزر كل ثانية
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            if (!nextButton.disabled) {
                nextButton.textContent = `${baseText} (${countdown})`;
            }
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);

    // المؤقت الرئيسي للانتقال بعد 15 ثوانٍ
    nextQuestionTimer = setTimeout(() => {
        clearInterval(countdownInterval); // إيقاف تحديث النص
        nextQuestion();
    }, 15000);
}


  // دالة عرض النتائج النهائية
    function showFinalResults() {
        stopIdleAnimation(); // ⬅️ إيقاف أي حركة متبقية
        const percentage = Math.round((score / questions.length) * 100);
        let message = '';
        let emoji = '';

        if (percentage >= 90) {
            message = 'ممتاز! أداء رائع';
            emoji = '🏆';
        } else if (percentage >= 70) {
            message = 'جيد جداً! واصل التميز';
            emoji = '⭐';
        } else if (percentage >= 50) {
            message = 'جيد! يمكنك التحسن أكثر';
            emoji = '👍';
        } else {
            message = 'حاول مرة أخرى';
            emoji = '📚';
        }

        quizContainer.innerHTML = `
            <div class="text-center py-8 md:py-12">
                <div class="text-5xl md:text-7xl mb-4 md:mb-6">${emoji}</div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">انتهى الاختبار!</h2>
                <p class="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">${message}</p>

                <div class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 md:p-8 mb-4 md:mb-6">
                    <p class="text-3xl md:text-5xl font-bold mb-1 md:mb-2">${score} / ${questions.length}</p>
                    <p class="text-xl md:text-2xl">${percentage}%</p>
                </div>

                <button onclick="location.reload()"
                        class="btn-answer bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    🔄 إعادة الاختبار
                </button>
            </div>
        `;

        progressFill.style.width = '100%';
        progressText.textContent = '100%';
        clearTimeout(nextQuestionTimer); // ⬅️ التأكد من إلغاء أي مؤقت في النهاية
        disableNextButton(); // ⬅️ تعطيل زر التالي في صفحة النتائج
    }

    // بدء الاختبار عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', initQuiz);

    // دالة خلط المصفوفة
    function shuffleArray(array) {
        if (!array || array.length === 0) return;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // دالة تهيئة الاختبار
    function initQuiz() {
        document.title = document.querySelector('.page-title-card h1').textContent;
        shuffleArray(questions);
        // Initialize counter text on load
        questionCounter.textContent = `1 / ${questions.length}`;
        renderQuestion();
    }
    // بدء الاختبار عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', initQuiz);