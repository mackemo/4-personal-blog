const user = document.querySelector('#username');
const title = document.querySelector('blog-title');
const content = document.querySelector('#blog-content');
const submitButton = document.querySelector('#submit');

const blogData = {
    user: user.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
};