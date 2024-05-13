
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';

// Retreive array data from localStorage
const postsJSON = localStorage.getItem('postArray');

if (postsJSON) {
    const posts = JSON.parse(postsJSON);

// Loop through each post and create HTML elements for each
posts.reverse().forEach(function(newPost) {
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

});
} else {
    // When no data is available
    console.error('No new post found.');
}
});




