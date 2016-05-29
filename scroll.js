// This file uses jQuery to set the body's height to the 
// height of the expanded menu when the mobile menu is toggled.

jQuery( document ).ready(function( $ ) {
	button = $( '.site-branding' ).find( '.secondary-toggle' );
	button.on( 'click.twentyfifteen', function() {
		if ( $( this, secondary ).hasClass( 'toggled-on' ) ) {
			// console.log('its here.'); // testing
			var height = $( 'div.toggled-on' ).height();
			// console.log(height); // testing
			$( 'body' ).css('min-height', '100%'); // for shorter menus
			$( 'body' ).css('height', height);
			$( 'body' ).css('overflow', 'hidden');
		} else {
			// console.log('its gone.'); // testing
			$( 'body' ).css('height', 'auto');
			$( 'body' ).css('overflow', 'auto');
		}
	});
});