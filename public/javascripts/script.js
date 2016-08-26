$(document).ready(function() {
  randomJoke();
  $('#magic-btn').on('click', function(e) {
    e.preventDefault()
    randomJoke();
  })
  $('#tweet-btn').on('click', function(e) {
    e.preventDefault()
    postTweet()
  })

});

function randomJoke() {
  var api = 'http://api.icndb.com/jokes/random';
  $.ajax({
      url: api
    })
    .done(function(data) {
      // console.log(data);
      $('#jokes').text(data.value.joke)
    })
}

function postTweet() {
  var api = '/tweets';
  $.ajax({
    url: api,
    method: 'POST',
    data: {
      joke: $('#jokes').text()
    }
  }).done(function(data) {
    console.log(data);
    randomJoke();
  })
}





// $(document).ready(function() {
//   $.getJSON(url, getQuote, 'jsonp');
//
// });
// $("#quote").click(function() {
//   $.getJSON(url, getQuote, 'jsonp');
// });
// //
// $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' — ' + data.quoteAuthor);
// }, 'jsonp');
