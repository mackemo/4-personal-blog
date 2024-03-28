const user = document.querySelector('#username');
const title = document.querySelector('#blog-title');
const content = document.querySelector('#blog-content');
const submitButton = document.querySelector('#submit');

//Event Listener for submit button//
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    //Blog post content//
    const blogPost = {
        user: user.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };
    //Alerting if form isnt complete//
    if (blogPost.user === "" || blogPost.title === "" || blogPost.content === "") {
        alert("Please complete form");
    //Storing input in local storage and switching to blog page//
    } else {
        const oldPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        oldPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(oldPosts));
        location.href = "blog.html"; 
    }  
});
