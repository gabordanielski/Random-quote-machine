$(function() {

  $blockquote = $('.blockquote');
  $quotebody = $('.quote-body');
  $quoteauthor = $('.quote-author');
  $newquote = $('.newquote');
  $twitterpost = $('.twitterpost');

  var quote = '';
  var author ='';

  function getQuote(){
    $.ajax({
  				url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
  				type: "GET",
  				//dataType: "json",
  				// do i need that ?
  				headers: { "X-Mashape-Key": "jyE8DjXc6OmshYj9Pc4FVHRvRHzep1Zh6GGjsnh5fxXuKB5r6y" },
  				success: function (data){
  					//document.write(JSON.stringify(data));
  					$.each(data,function(i,order){
  							$quotebody.html(data.quote);
                $quoteauthor.html(data.author);
                quote = data.quote;
                author = data.author;
  					});
  					console.log(data);
            $blockquote.slideDown();
  				},
  				error: function (msg) { alert(msg); }
  	});
  }

  $newquote.click(function(){
    $blockquote.slideUp(function(){
      getQuote();
    });
  });

  $twitterpost.click(function(){
    $twitterpost.attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });

  getQuote();

});