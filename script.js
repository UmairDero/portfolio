const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Set initial theme based on local storage or default to light
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️'; // Sun icon for light mode
} else {
    body.classList.add('light');
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '☀️'; // Change to sun icon
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        themeToggle.textContent = '🌙'; // Change to moon icon
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
});