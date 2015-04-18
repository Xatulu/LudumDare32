ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus'
)
.defines(function(){

	var myGameClass = ig.GameExtended.extend({
	//GameSettings go here

	init: function() {

	},

	update: function() {

	},

	draw: function() {
		
	}

	});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );

});
