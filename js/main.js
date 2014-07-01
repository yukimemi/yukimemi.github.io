(function() {
  console.log("hello from a require'd coffee file <-- via assets/js/_helper.coffee");

}).call(this);

(function() {
  var jq, js;

  jq = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"];

  js = ["/bower_components/google-code-prettify/src/prettify.js", "/bower_components/jquery.simplePagination/jquery.simplePagination.js"];

  require(jq, function() {
    return require(js, function() {
      return $(function() {
        var items, numItems, perPage;
        console.log('jquery loaded, dom ready <-- via assets/js/main.coffee');
        items = $('#posts li');
        numItems = items.length;
        perPage = 13;
        items.slice(0, perPage).show();
        $('.pagination').pagination({
          items: numItems,
          itemsOnPage: perPage,
          cssStyle: "light-theme",
          onPageClick: function(pageNumber) {
            var showFrom, showTo;
            showFrom = perPage * (pageNumber - 1);
            showTo = showFrom + perPage;
            return items.hide().slice(showFrom, showTo).show();
          }
        });
        $('pre').addClass('prettyprint linenums');
        return prettyPrint();
      });
    });
  });

}).call(this);
