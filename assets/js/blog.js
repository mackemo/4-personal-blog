const toggleButton = document.querySelector('#toggle');
const container = document.querySelector('.container');
const backButton = document.querySelector('#back-button');

let mode = 'light';

toggleButton.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});

backButton.addEventListener('click', function() {
    location.href = "index.html"; 
})