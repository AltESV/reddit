const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');
const creds = require('./credentials.json');

const client = new Snoowrap(creds);

const BOT_START = Date.now() / 1000;

const comments = new CommentStream(client, { 
    subreddit: 'fanaverse', 
    limit: 10, 
    pollTime: 10000 
});

//logs most recent 10 comments
comments.on('item', (item) => {
    console.log(item);
});

//Creates an infinite loop
// comments.on('item', (item) => {
//     if(item.created_utc < BOT_START) return;

//     item.reply('Welcome to the FANAVERSE my friend!');
// });