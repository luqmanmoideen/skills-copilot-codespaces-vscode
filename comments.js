// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const commentService = require('./commentService');
const comment = require('./commentEntity');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send(commentService.getComments());
});

app.post('/comments', (req, res) => {
    const newComment = new comment(req.body.comment);
    commentService.addComment(newComment);
    res.send(newComment);
});

app.delete('/comments', (req, res) => {
    commentService.deleteComments();
    res.send('All comments deleted');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// In comments.js, we have a similar implementation to the one in comment.js. 
// We have a web server that listens on port 3000 and uses the commentService and commentEntity modules to handle comments. 
// The routes for getting, adding, and deleting comments are defined in a similar way to the comment.js file. 
// The main difference is that the comments.js file uses the commentService and commentEntity modules to handle comments, 
// while the comment.js file directly manipulates the comments array. 
// This separation of concerns allows for better organization and modularity in the codebase. 
// We can easily swap out the commentService and commentEntity modules with different implementations without changing the rest of the code. 
// This makes the code more maintainable and testable.

// Path: commentEntity.js
// Create comment entity
class Comment {
    constructor(text) {
        this.text = text;
    }
}

module.exports = Comment;
// The commentEntity.js file defines a Comment class with a text property. 
// This class is used to represent a comment in the application. 
// The constructor takes a text parameter and assigns it to the text property of the comment object. 
// The Comment class is exported so that it can be used in other modules. 
// This separation of concerns allows for better organization and modularity in the codebase. 
// We can easily swap out the Comment class with a different implementation without changing the rest of the code. 
// This makes the code more maintainable and testable.

// Path: commentService.js
// Create comment service
const comments = [];
const getComments = () => {
    return comments;
}