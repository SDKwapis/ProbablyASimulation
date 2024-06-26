const userName = document.querySelector('#username');
const title = document.querySelector('#title');
const post = document.querySelector('#post'); 

const submitPost = document.querySelector('#button');

submitPost.addEventListener('click', function (event) {
      // Prevent the default behavior
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const post = document.getElementById('post').value;

    const newPost = {
        userName: userName,
        title: title,
        post: post
    };

    const postArray = JSON.parse(localStorage.getItem('postArray')) || [];
    postArray.push(newPost);
   
   localStorage.setItem('postArray', JSON.stringify(postArray));

   window.location.href = 'blog.html';
   
})

