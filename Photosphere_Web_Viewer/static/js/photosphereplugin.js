(function( $ ) {
  $.fn.makePhotosphere = function() {
    //this.css({"backgroundColor": "black", "color": "white"});
    this.each(function() {
  		console.log(this);
  		sphere = new Photosphere(this.getAttribute("href"));
		sphere.loadPhotosphere(this);
	});
  };
})( jQuery );
$(function() {
	$('.photosphere').makePhotosphere();
});