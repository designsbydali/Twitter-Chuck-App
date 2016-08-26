var express = require('express');
var router = express.Router();
var Twit = require('twit');

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// var tweet = twitter.stream('statuses/filter', { track: 'Gibson ES 339' });

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log('woah')
})

router.post('/', function(req, res, next) {
  const tweet = new Tweet(req.body)
  tweet.userId = req.user.sub;

  })


module.exports = router;
// router.post('statuses/update', {status: 'I Love Tech Knights!'},  function(error, tweet, response){
//   if(error){
//     console.log(error);
//   }
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });

// $(document).ready(function() {
//   random();
//
// function random() {
// var quotes = [];
//
// randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// quote = randomQuote.split("randomQuote");
// $('.quote').text(quote[0]);
//   }
//
// $("#tweet").on("click", function() {
// random();
//   });
// });
