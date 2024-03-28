const toggleButton = document.querySelector('#toggle');
const container = document.querySelector('.container');
const backButton = document.querySelector('#back-button');
const postsList = document.querySelector('#posts-list');

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

const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
postsList.innerHTML = '';

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postLi = document.createElement('li');
    postLi.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p>${post.user}</p>
    `;
postsList.appendChild(postLi);
}



