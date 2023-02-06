const express = require('express'),
path = require('path'),
profileRouter = require('./routes/profile/profile.router'),
CORS = require('cors');
app = express();

const publicFile = path.join(__dirname, './dist/blog');
app.use(express.json());
app.use(express.static(publicFile));

app.use(CORS());
app.use('/profile', profileRouter);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './dist/blog/index.html')));

module.exports = app;