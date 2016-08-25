$(document).ready(function() {
   $('#magic-btn').on('click', function(){
      var api = 'http://api.icndb.com/jokes/random';
      $.ajax({
        url: api
      })
      .done(function (data) {
        // console.log(data);
        $('#jokes').text(data.value.joke)

      })


   });
});
