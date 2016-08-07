(function($) {

  function mergeSettings(parameters) {
    var settings = {
      filter: '',
      searchField: '.filter-search',
      sword: '',
      swordPrepend: 'search-'
    };
    //settings = standorte;
    if (parameters)
      $.extend(settings, parameters);
    return settings;
  }

  function attachFilter(settings, element) {
    //console.log(element);
    var sel = '[class*='+settings.swordPrepend+settings.sword+']';
    //console.log(sel);
    element.find('li:not('+sel+')').slideUp();
    element.find(sel).slideDown();
  }

  function addEvents(settings, element) {
    //console.log(settings);
    $(settings.searchField).keyup(function(e){
      //console.log($(settings.searchField).val());
      settings.sword = $(settings.searchField).val();
      attachFilter(settings, element);
    });
  }

  $.fn.filter = function(parameters) {
    var element = $(this);
    var settings = mergeSettings(parameters);
    //alert('Plugin activated on: '+element.attr('id'));
    //console.log(settings.filter);
    addEvents(settings, element);
    //console.log(settings.searchfilter);
    element.find('li:not('+settings.filter+')').slideUp();
    element.find(settings.filter).slideDown();
    return element;
  }
})(jQuery);
