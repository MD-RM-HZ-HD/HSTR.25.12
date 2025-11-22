        // Shuffle function
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // المتغيرات العامة
        let currentQuestionIndex = 0;
        let score = 0;
        let nextQuestionTimer; // ⬅️ متغير للاحتفاظ بمؤقت السؤال التالي
        let shuffledQuiz;

        // عناصر DOM
        const quizContainer = document.getElementById('quiz-container');
        const questionCounter = document.getElementById('question-counter');
        const scoreDisplay = document.getElementById('score-display');
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const nextButton = document.getElementById('next-question-btn');
        const footerMessage = document.getElementById('footer-message');


        // دالة تحديث شريط التقدم
        function updateProgress() {
            const progress = ((currentQuestionIndex) / shuffledQuiz.length) * 100;
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';
        }

        // دالة تفعيل زر "السؤال التالي"
        function enableNextButton() {
            nextButton.disabled = false;
            nextButton.textContent = 'السؤال التالي';
        }

        // دالة تعطيل زر "السؤال التالي"
        function disableNextButton() {
            nextButton.disabled = true;
            nextButton.textContent = 'أجب على السؤال للانتقال إلى التالي';
        }

        // دالة الانتقال للسؤال التالي (الزر اليدوي)
        window.nextQuestion = function() {
            clearTimeout(nextQuestionTimer); // ⬅️ إلغاء المؤقت التلقائي عند الضغط اليدوي
            
            disableNextButton();
            currentQuestionIndex++;
            renderQuestion();
        }

        // دالة عرض السؤال
        function renderQuestion() {
            if (shuffledQuiz.length === 0) {
                quizContainer.innerHTML = `
                    <div class="text-center py-12">
                        <p class="text-xl text-red-600 font-semibold">⚠️ لا توجد أسئلة متاحة</p>
                    </div>
                `;
                disableNextButton();
                return;
            }

            if (currentQuestionIndex >= shuffledQuiz.length) {
                showFinalResults();
                return;
            }

            // ⬅️ تأكد من تعطيل زر "السؤال التالي" قبل عرض السؤال الجديد
            disableNextButton();

            const currentQ = shuffledQuiz[currentQuestionIndex];

            quizContainer.innerHTML = `
                <div class="question-card true-false">
                    <span class="question-number">
                        السؤال ${currentQuestionIndex + 1}
                    </span>

                    <p class="question-text">
                        ${currentQ.text}
                    </p>

                    <div class="grid grid-cols-2 gap-3 md:gap-4">
                        <button onclick="submitAnswer(true)"
                                class="btn-answer btn-true"
                                id="btn-true">
                            ✅ صواب
                        </button>
                        <button onclick="submitAnswer(false)"
                                class="btn-answer btn-false"
                                id="btn-false">
                            ❌ خطأ
                        </button>
                    </div>
                </div>

                <div id="feedback" class="hidden mt-4 md:mt-6"></div>
            `;

            questionCounter.textContent = `${currentQuestionIndex + 1} / ${shuffledQuiz.length}`;
            scoreDisplay.textContent = score;
        }

        // دالة معالجة الإجابة
        window.submitAnswer = function(userAnswer) {
            const currentQ = shuffledQuiz[currentQuestionIndex];
            const feedbackDiv = document.getElementById('feedback');
            const btnTrue = document.getElementById('btn-true');
            const btnFalse = document.getElementById('btn-false');

            // تعطيل أزرار الإجابة
            btnTrue.disabled = true;
            btnFalse.disabled = true;

            const isCorrect = userAnswer === currentQ.answer;
            const correctAnswerText = currentQ.answer ? 'صواب' : 'خطأ';

            if (isCorrect) {
                score++;
                feedbackDiv.className = 'feedback-box feedback-correct';
                feedbackDiv.innerHTML = `
                    <div class="text-center mb-2 md:mb-3">
                        <p class="text-xl md:text-2xl font-bold mt-1 md:mt-2">✅ إجابة صحيحة!</p>
                    </div>
                    <div class="text-right">
                        <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">📝 الشرح:</p>
                        <p class="text-sm md:text-base">${currentQ.explanation}</p>
                    </div>
                `;
            } else {
                feedbackDiv.className = 'feedback-box feedback-incorrect';
                feedbackDiv.innerHTML = `
                    <div class="text-center mb-2 md:mb-3">
                        <p class="text-xl md:text-2xl font-bold mt-1 md:mt-2">❌ إجابة خاطئة</p>
                    </div>
                    <div class="text-right">
                        <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">✔️ الإجابة الصحيحة: ${correctAnswerText}</p>
                        <p class="font-semibold mb-1 md:mb-2 text-sm md:text-base">📝 الشرح:</p>
                        <p class="text-sm md:text-base">${currentQ.explanation}</p>
                    </div>
                `;
            }

            feedbackDiv.classList.remove('hidden');
            scoreDisplay.textContent = score;
            updateProgress();

            // ⬅️ تفعيل زر السؤال التالي بدلاً من المؤقت التلقائي
            // enableNextButton(); // ⬅️ سيتم استبدال هذا بالدالة الجديدة
            startNextQuestionTimer(); // ⬅️ بدء المؤقت التلقائي مع العد التنازلي
        };

        // ⬅️ دالة جديدة: بدء مؤقت الانتقال التلقائي للسؤال التالي
        function startNextQuestionTimer() {
            enableNextButton();
            let countdown = 15;
            nextButton.textContent = `السؤال التالي (${countdown})`;

            // مؤقت لتحديث نص الزر كل ثانية
            const countdownInterval = setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    // التأكد من أن الزر لا يزال مفعّلاً قبل تحديث النص
                    if (!nextButton.disabled) {
                        nextButton.textContent = `السؤال التالي (${countdown})`;
                    }
                } else {
                    clearInterval(countdownInterval);
                }
            }, 1000);

            // المؤقت الرئيسي للانتقال بعد 10 ثوانٍ
            nextQuestionTimer = setTimeout(() => {
                clearInterval(countdownInterval); // إيقاف تحديث النص
                nextQuestion();
            }, 15000);
        }

        // دالة عرض النتائج النهائية
        function showFinalResults() {
            const percentage = Math.round((score / shuffledQuiz.length) * 100);
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
                        <p class="text-3xl md:text-5xl font-bold mb-1 md:mb-2">${score} / ${shuffledQuiz.length}</p>
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
        document.addEventListener('DOMContentLoaded', () => {
            document.title = document.querySelector('.page-title-card h1').textContent;
            shuffledQuiz = shuffle([...comparisonQuiz]);
            // Initialize counter text on load
            questionCounter.textContent = `1 / ${shuffledQuiz.length}`;
            renderQuestion();
        });
