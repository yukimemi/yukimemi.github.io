#= require "_helper"

# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
jq = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]
js = [
      "/bower_components/google-code-prettify/src/prettify.js"
      "/bower_components/jquery.simplePagination/jquery.simplePagination.js"
     ]

# this will fire once the required scripts have been loaded
require jq, ->
  require js, ->
    $ ->
      console.log 'jquery loaded, dom ready <-- via assets/js/main.coffee'

      # Pagination
      items = $('#posts li')
      numItems = items.length
      perPage = 21

      # only show the first perPage items initially
      items.slice(0, perPage).show()

      # now setup your pagination
      $('.pagination').pagination
        items: numItems
        itemsOnPage: perPage
        cssStyle: "light-theme"
        onPageClick: (pageNumber) -> # this is where the magic happens
          # someone changed page, lets hide/show trs appropriately
          showFrom = perPage * (pageNumber - 1)
          showTo = showFrom + perPage

          items.hide() # first hide everything, then show for the new page
               .slice(showFrom, showTo).show()

      # google-code-prettify
      $('pre').addClass 'prettyprint linenums'
      prettyPrint()
