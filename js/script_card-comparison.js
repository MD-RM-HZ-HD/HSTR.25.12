// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Global State
let currentIndex = 1;
let isRevealed = false;
let shuffledComparisons;

// DOM Elements
const caseATextEl = document.getElementById('case-a-text');
const caseBTextEl = document.getElementById('case-b-text');
const caseATitleEl = document.getElementById('case-a-title');
const caseBTitleEl = document.getElementById('case-b-title');

const casesGridEl = document.getElementById('cases-grid');
const differenceAreaEl = document.getElementById('difference-area');
const differenceTextEl = document.getElementById('difference-text');

const revealBtn = document.getElementById('reveal-btn');
const prevBtn = document.getElementById('prev-btn');
const completionMessageEl = document.getElementById('completion-message');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const comparisonCounter = document.getElementById('comparison-counter');

function renderComparison() {
    if (currentIndex > shuffledComparisons.length) {
        showCompletion();
        return;
    }

    const comparison = shuffledComparisons[currentIndex - 1];

    // Reset state
    isRevealed = false;
    
    // Hide Cases initially
    casesGridEl.classList.add('hidden');
    casesGridEl.classList.remove('opacity-100', 'translate-y-0');
    casesGridEl.classList.add('opacity-0', 'translate-y-4');

    // --- Set Titles & Content Directly from Data ---
    
    // 1. Construct Main Title (Blue Box)
    differenceTextEl.textContent = `الفرق بين ${comparison.titleA} و ${comparison.titleB}`;
    
    // 2. Set Case Titles (Cards)
    caseATitleEl.textContent = comparison.titleA;
    caseBTitleEl.textContent = comparison.titleB;
    
    // 3. Set Case Text
    caseATextEl.textContent = comparison.textA;
    caseBTextEl.textContent = comparison.textB;

    // Reset Button Text
    revealBtn.textContent = 'إظهار الفرق';

    // Update progress
    const progress = ((currentIndex - 1) / shuffledComparisons.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
    if(comparisonCounter) comparisonCounter.textContent = `${currentIndex} / ${shuffledComparisons.length}`;

    // Update navigation buttons
    prevBtn.disabled = currentIndex === 1;
    prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
}

function toggleRevelation() {
    if (!isRevealed) {
        // Reveal
        isRevealed = true;
        
        casesGridEl.classList.remove('hidden');
        setTimeout(() => {
            casesGridEl.classList.remove('opacity-0', 'translate-y-0');
            casesGridEl.classList.add('opacity-100', 'translate-y-0');
        }, 50);

        if (currentIndex === shuffledComparisons.length) {
            revealBtn.textContent = 'إنهاء';
        } else {
            revealBtn.textContent = 'المقارنة التالية ←';
        }
    } else {
        // Navigate
        navigate(1);
    }
}

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 1) currentIndex = 1;
    if (currentIndex > shuffledComparisons.length) {
            showCompletion();
    } else {
        renderComparison();
        completionMessageEl.classList.add('hidden');
        document.getElementById('comparison-card').classList.remove('hidden');
    }
}

function showCompletion() {
        completionMessageEl.classList.remove('hidden');
        document.getElementById('comparison-card').classList.add('hidden');
        progressFill.style.width = '100%';
        progressText.textContent = '100%';
}

// Event Listeners
revealBtn.addEventListener('click', toggleRevelation);
prevBtn.addEventListener('click', () => navigate(-1));

// --- التعديل الجديد: جعل المنطقة الزرقاء قابلة للنقر ---
differenceAreaEl.addEventListener('click', toggleRevelation);

window.onload = () => {
        if(document.querySelector('.page-title-card h1')) {
            document.title = document.querySelector('.page-title-card h1').textContent;
        }
        if (typeof comparisons !== 'undefined') {
            shuffledComparisons = shuffle([...comparisons]);
            renderComparison();
        }
}