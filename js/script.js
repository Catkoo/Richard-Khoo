const textArray = ["Cloud Engineer", "Web Developer", "UI/UX Designer"];
let currentIndex = 0;

function changeText() {
    const textElement = document.getElementById("changing-text");
    textElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 2000);

const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));

