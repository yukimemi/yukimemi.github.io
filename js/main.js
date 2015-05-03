$(function() {
  console.log("begin");
  $('pre').addClass('prettyprint linenums');
  prettyPrint();

  $('#post h3').addClass('amber-text text-darken-4');
  $('#post h4').addClass('teal-text text-accent-3');
  $('#post h5').addClass('light-blue-text text-accent-3');
});

// add line number to gist
$('.gist').each(function() {
  $('.line',this).each(function(i, e) {
    $(this).prepend( $('<div/>').attr('unselectable','on').css({
      'float' : 'left',
      'width': '30px',
      'font-weight' : 'bold',
      'color': 'grey',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none'
    }).text(++i) );
  });
});

