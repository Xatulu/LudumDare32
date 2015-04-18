ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus',
	'game.levels.test'
)
.defines(function(){	
	var myGameClass = ig.GameExtended.extend({
	//GameSettings go here



	init: function() {
		this.parent();
		this.loadLevel(ig.global.LevelTest);
	},
	inputStart: function(){
			this.parent();
			ig.input.bind(ig.KEY.F, 'shoot');
	},
	inputEnd: function(){
			this.parent();
			ig.input.bind(ig.KEY.F, 'shoot');
	}

	});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', myGameClass, 60, 320, 240, 1, ig.LoaderExtended );

});
