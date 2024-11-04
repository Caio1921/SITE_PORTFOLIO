function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

const cursorCircle = document.createElement('div');
cursorCircle.style.width = '15px';
cursorCircle.style.height = '15px';
cursorCircle.style.borderRadius = '50%';
cursorCircle.style.backgroundColor = '#00FFD5';
cursorCircle.style.position = 'absolute';
cursorCircle.style.pointerEvents = 'none';
cursorCircle.style.transition = 'transform 0.1s ease-out';
document.body.appendChild(cursorCircle);


document.addEventListener('mousemove', (e) => {
    cursorCircle.style.transform = `translate(${e.pageX - 7.5}px, ${e.pageY - 7.5}px)`;
});

