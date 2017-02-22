jQuery( document ).ready(function() {
  jQuery('.latest-topics .other li').each(function(index){
    if (index >= 10) {
      jQuery(this).addClass('list_hider');
    }
  });
  if ( jQuery('.latest-topics .other li').length >= 10 ) {
    var ttlr = jQuery('.latest-topics .other li').length ;
    jQuery('.latest-topics .other ul').append('<li class="expandr"><a href="#other_extend" class="unhide_list">'+ttlr+'  More Items... </a></li>');
    jQuery('.latest-topics .other ul').append('<style>.list_hider{display: none !important;}<style>');
    jQuery('body .unhide_list').on('click', function(){
      jQuery('.latest-topics .other li').removeClass('list_hider');
      jQuery('body .unhide_list').remove();
      e.preventDefault();
    });
  }
});
