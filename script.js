// Calculator functions
function appendDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Counter functions
function decreaseCounter(counterId) {
    const counter = document.getElementById(counterId);
    const countSpan = counter.querySelector('.count');
    let count = parseInt(countSpan.textContent);

    if (count > 0) {
        count--;
        countSpan.textContent = count;
        createStarEffect(counter);

        if (count === 0) {
            counter.classList.add('zero'); // Add red background when counter reaches zero
        }
    }
}

function createStarEffect(counter) {
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        counter.appendChild(star);

        // Remove the star after animation
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
}

// Function to set the static Hijri date
function setStaticHijriDate() {
    const hijriCalendar = document.getElementById('hijri-calendar');
    hijriCalendar.textContent = "اليوم الهجري اليوم صفر (الشهر 2) 1446 هـ";
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setStaticHijriDate();
    fetchPrayerTimes();
    drawCalligraphy();
});
// Fetch and display prayer times data
function fetchPrayerTimes() {
    const prayerTimes = document.getElementById('prayer-times');
    // Example prayer times (replace with actual API or calculation)
    document.getElementById('fajr-time').textContent = 'الفجر: 4:30 AM';
    document.getElementById('shurouk-time').textContent = 'الشروق: 6:30 AM';
    document.getElementById('dhuhr-time').textContent = 'الظهر: 12:29 PM';
    document.getElementById('asr-time').textContent = 'العصر: 16:07 PM';
    document.getElementById('maghrib-time').textContent = 'المغرب: 18:57 PM';
    document.getElementById('isha-time').textContent = 'العشاء: 12:22 PM';
}

// Draw interactive calligraphy
function drawCalligraphy() {
    const canvas = document.getElementById('calligraphy-canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '40px Arabic Typesetting';
    ctx.textAlign = 'center';
    ctx.fillText('﴾و ان ليس للانسان الا ما سعى..﴿', canvas.width / 2, canvas.height / 2);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchHijriDate();
    fetchPrayerTimes();
    drawCalligraphy();
});
// Initialize the dhikr count
let dhikrCount = 0;

// Increase dhikr count
function increaseDhikrCount() {
    const dhikrCountElement = document.getElementById('dhikr-count');
    const dhikrNumberElement = document.getElementById('dhikr-number');

    if (dhikrCount < 33) { // Assuming the goal is 33 dhikrs
        dhikrCount++;
        dhikrCountElement.textContent = dhikrCount;
        dhikrNumberElement.textContent = dhikrCount;

        if (dhikrCount === 33) {
            alert('تم الوصول إلى عدد الأذكار المطلوب!');
        }
    }
}

// Fetch and initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Other initialization code if needed
});

// Add this function to script.js

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    
    // Correct answer
    const correctAnswer = 'يونس'; // Replace with the correct answer
    
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'صحيح!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = 'خطأ! حاول مرة أخرى.';
        feedback.className = 'feedback incorrect';
    }
}
