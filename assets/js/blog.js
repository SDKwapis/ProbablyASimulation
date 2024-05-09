document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('blogContainer');


// Retreive object data from sessionStorage
const newPostJSON = sessionStorage.getItem('newPost');

if (newPostJSON) {
    const newPost = JSON.parse(newPostJSON);

// create HTML elements
const div = document.createElement('div');
const newTitle = document.createElement('h3');
const blogPost = document.createElement('p');
const postedBy = document.createElement('p');

newTitle.textContent = newPost.title;
blogPost.textContent = newPost.post;
postedBy.textContent = "Posted by:" + newPost.username;

div.appendChild(newTitle);
div.appendChild(blogPost);
div.appendChild(postedBy);
container.appendChild(div);

sessionStorage.removeItem('newPost');

} else {
    // When no data is available
    console.error('No new post found.');
}
});
