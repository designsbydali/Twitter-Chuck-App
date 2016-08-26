$(document).ready(function() {
  $('#magic-btn').on('click', function() {
    var api = 'http://api.icndb.com/jokes/random';
    $.ajax({
        url: api
      })
      .done(function(data) {
        // console.log(data);
        $('#jokes').text(data.value.joke)

      })
  })

  $('#tweet-btn').on('click', function () {
    // console.log('okay');
    var api = 'http://api.icndb.com/jokes/random';
    $.ajax({
        url: api
      }).done(function(data){
        // console.log('happy');
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + data.value.joke);
        console.log('neah');
      })
  })

});

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
