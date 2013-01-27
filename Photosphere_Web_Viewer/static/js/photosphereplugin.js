(function( $ ) {
  $.fn.makePhotosphere = function() {
    //this.css({"backgroundColor": "black", "color": "white"});
    this.each(function() {
    	try {
  		sphere = new Photosphere(this.getAttribute("href"));
		sphere.loadPhotosphere(this);
		}
		catch (e) {
			this.append("<img src='" + this.getAttribute("href") + " alt='Photosphere Image'>");
		}

	});
  };
})( jQuery );
$(function() {
	//$('.photosphere').makePhotosphere();
	$('.photosphere').append("<img src='" + this.getAttribute("href") + " alt='Photosphere Image'>");
});