const user = document.querySelector('#username');
const title = document.querySelector('blog-title');
const content = document.querySelector('#blog-content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    const blogData = {
        user: user.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    localStorage.setItem('blogData', JSON.stringify(blogData));
});

document.getElementById('submit').onclick = function () { 
    location.href = "blog.html" 
}

