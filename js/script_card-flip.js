// المدة من ملف style.css (.card-face { transition: opacity 1.0s ... })
const CONTENT_FADE_DURATION = 1000; // 1000ms = 1.0s

let currentCardIndex = 1; // Start with 1-based index
let isFlipped = false;
let shuffledCards = [];

// العناصر
const cardElement = document.getElementById('flashcard');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const totalCards = cardData.length;



const frontFace = document.getElementById('front-face');
const backFace = document.getElementById('back-face');
const frontHeader = document.getElementById('front-header');
const frontContent = document.getElementById('front-content');
const backHeader = document.getElementById('back-header');
const backContent = document.getElementById('back-content');
const endScreen = document.getElementById('end-screen');
const cardAndButtonsContainer = document.getElementById('card-and-buttons-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateProgress(index) {
    if (totalCards > 0) {
        // Using a 1-based index for calculation
        const progressPercentage = (index / totalCards) * 100;
        progressText.textContent = `${Math.round(progressPercentage)}%`;
        progressFill.style.width = `${progressPercentage}%`;
    }
}
function applyRandomStyle(displayNumber) {
    // الوجه الأمامي (السؤال)
    frontFace.classList.add('card-face', 'card-front', 'flex', 'flex-col', 'justify-between');
    frontHeader.classList.add('card-header', 'shadow-md');
    frontContent.className = 'card-content';

    // الوجه الخلفي (الإجابة)
    backFace.classList.add('card-face', 'card-back', 'flex', 'flex-col', 'justify-between');
    backHeader.classList.add('card-header', 'shadow-md');
    backContent.className = 'card-content';

    // تحديث محتوى العنوان
    frontHeader.textContent = `البطاقة ${displayNumber}`;
    backHeader.textContent = `البطاقة ${displayNumber}`;
}

// --- دالة loadCard (مع إصلاح الوميض) ---
function loadCard() {
    if (currentCardIndex > totalCards) {
        showEndScreen();
        return;
    }

    const card = shuffledCards[currentCardIndex - 1];

    // تحقق مما إذا كانت البطاقة مقلوبة *قبل* إعادة تعيينها
    const wasFlipped = isFlipped;

    // إعادة البطاقة لوضعها الطبيعي أولاً
    isFlipped = false;
    cardElement.classList.remove('flipped'); // <-- بدء التحريك (إلغاء القلب)

    // تعريف دالة لتحديث المحتوى (حتى نتمكن من تأخيرها)
    const updateContent = () => {
        frontContent.textContent = card.question;
        backContent.textContent = card.answer;
        applyRandomStyle(currentCardIndex);
    };

    if (wasFlipped) {
        // إذا كانت البطاقة مقلوبة (نحن ننتقل)
        // انتظر حتى ينتهي تحريك التلاشي (1.0 ثانية) قبل تغيير النص
        setTimeout(updateContent, CONTENT_FADE_DURATION);
    } else {
        // إذا لم تكن مقلوبة (التحميل الأولي)، قم بالتحديث فوراً
        updateContent();
    }

    // تحديث الأزرار وشريط التقدم *فوراً*
    updateNavigationButtons();
    updateProgress(currentCardIndex);
}


function nextCard() {
    // الأزرار معطلة إذا لم يتم القلب، لذا لا داعي للتحقق
    if (currentCardIndex < totalCards) {
        currentCardIndex++;
        loadCard();
    } else {
        showEndScreen();
    }
}

function prevCard() {
    // الأزرار معطلة إذا لم يتم القلب، لذا لا داعي للتحقق
    if (currentCardIndex > 1) {
        currentCardIndex--;
        loadCard();
    }
}

window.flipCard = function() {
    if (currentCardIndex > totalCards) return;

    if (!isFlipped) {
        // النقرة الأولى: إظهار الإجابة
        isFlipped = true;
        cardElement.classList.add('flipped');
        updateNavigationButtons();
    } else {
        // النقرة الثانية: الانتقال إلى البطاقة التالية بنفس طريقة زر "Next"
        nextCard();
    }
}

function updateNavigationButtons() {
    if (prevBtn) prevBtn.disabled = currentCardIndex <= 1 || !isFlipped;
    if (nextBtn) nextBtn.disabled = currentCardIndex >= totalCards || !isFlipped;
}

function showEndScreen() {
    if (cardElement) cardElement.classList.add('hidden');
    if (endScreen) endScreen.classList.remove('hidden');
    if (cardAndButtonsContainer) cardAndButtonsContainer.classList.add('hidden');
}

// --- دالة restartQuiz (مع الإصلاح الجديد) ---
window.restartQuiz = function() {
    if (endScreen) endScreen.classList.add('hidden');
    if (cardElement) cardElement.classList.remove('hidden');
    if (cardAndButtonsContainer) cardAndButtonsContainer.classList.remove('hidden');
    
    currentCardIndex = 1;
    isFlipped = false; // <-- ⭐️⭐️⭐️ هذا هو الإصلاح الجديد ⭐️⭐️⭐️
    
    shuffledCards = shuffle([...cardData]);
    loadCard();
    // لا حاجة لاستدعاء updateProgress هنا لأن loadCard تقوم بذلك
}

// تهيئة التطبيق عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    if (nextBtn) nextBtn.addEventListener('click', nextCard);
    if (prevBtn) prevBtn.addEventListener('click', prevCard);
    window.restartQuiz();
});