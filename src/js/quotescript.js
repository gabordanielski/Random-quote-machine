$(function() {

  $blockquote = $('.blockquote');
  $quotebody = $('.quote-body');
  $quoteauthor = $('.quote-author');
  $newquote = $('.newquote');
  $twitterpost = $('.twitterpost');

  //var colors = ['#0014ff','#ff2f00','#00ff08','#ff00a5','#efff00','#787969','#b33636'];

  var quote = '';
  var author ='';

  function getQuote(){
    $.ajax({
  				url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
  				type: "GET",
  				//dataType: "json",
  				headers: { "X-Mashape-Key": "jyE8DjXc6OmshYj9Pc4FVHRvRHzep1Zh6GGjsnh5fxXuKB5r6y" },
  				success: function (data){
  					$.each(data,function(i,order){
  							$quotebody.html(data[0].quote);
                $quoteauthor.html(data[0].author);
                quote = data[0].quote;
                author = data[0].author;
  					});
            $blockquote.slideDown();
  				},
  				error: function (msg) { alert(msg); }
  	});
  }

  $newquote.click(function(){
    $blockquote.slideUp(function(){
      getQuote();
    });
    //$('body').attr('style', 'background-color:'+colors[number]+'!important');
  });

  $twitterpost.click(function(){
    $twitterpost.attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });

  getQuote();

});
