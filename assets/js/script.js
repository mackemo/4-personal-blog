const user = document.querySelector('#username');
const title = document.querySelector('#blog-title');
const content = document.querySelector('#blog-content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    const blogPost = {
        user: user.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    if (blogPost.user === "" || blogPost.title === "" || blogPost.content === "") {
        alert("Please complete form");
    } else {
        const oldPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        oldPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(oldPosts));
        location.href = "blog.html"; 
    }  
});
