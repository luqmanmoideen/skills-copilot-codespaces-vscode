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
