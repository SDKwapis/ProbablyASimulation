
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('blogContainer');

// Retreive object data from localStorage
const newPostJSON = localStorage.getItem('newPost');

if (newPostJSON) {
    const newPost = JSON.parse(newPostJSON);

// create HTML elements
const div = document.createElement('div');
const newTitle = document.createElement('h3');
newTitle.className = 'titleStyle'
const blogPost = document.createElement('p');
blogPost.className = 'postStyle'
const postedBy = document.createElement('p');
postedBy.className = 'author'

newTitle.textContent = newPost.title;
blogPost.textContent = newPost.post;
postedBy.textContent = "Posted by: " + newPost.userName;

div.appendChild(newTitle);
div.appendChild(blogPost);
div.appendChild(postedBy);
container.appendChild(div);

localStorage.removeItem('newPost');

} else {
    // When no data is available
    console.error('No new post found.');
}
});




