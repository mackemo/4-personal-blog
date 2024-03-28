const toggleButton = document.querySelector('#toggle');
const container = document.querySelector('.container');
const backButton = document.querySelector('#back-button');
const postsList = document.querySelector('#posts-list');

let mode = 'light';
//Event Listener for toggle button (light/dark mode)//
toggleButton.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});
//Back button goes back to main page//
backButton.addEventListener('click', function() {
    location.href = "index.html"; 
})
//Turning local storage into objects to display on page//
const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
postsList.innerHTML = '';
//For loop displaying each blog post on page//
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postLi = document.createElement('li');
    postLi.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.content}</p>
        <h5>${post.user}</h5>
    `;
postsList.appendChild(postLi);
}

