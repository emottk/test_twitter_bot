require('dotenv').config()

var Twitter = require('twitter');
var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
});

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.post('statuses/update', {status: 'trrrrt'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

//
// client.itemSearch({
//   director: 'Quentin Tarantino',
//   actor: 'Samuel L. Jackson',
//   searchIndex: 'DVD',
//   audienceRating: 'R',
//   responseGroup: 'ItemAttributes,Offers,Images'
// }).then(function(results){
//   console.log(results);
// }).catch(function(err){
//   console.log(err);
// });
