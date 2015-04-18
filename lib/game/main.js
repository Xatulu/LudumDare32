ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus',
	'game.levels.Morning',
	'game.levels.test',
    'impact.sound'	
)
.defines(function(){	
	var myGameClass = ig.GameExtended.extend({

		morning: true,

	init: function() {
		this.parent();
		this.loadLevel(ig.global.LevelMorning);
		ig.music.add('media/music/music1.ogg');
		ig.music.add('media/music/music2.ogg');
		ig.music.add('media/music/music3.ogg');
		ig.music.random = true;
		ig.music.volume = 0.3;
		ig.music.play();
		ig.game.camera.addAtmosphere(0,{
 		r: 0.3,
		g: 0.3,
		b: 0.12,
		alpha: 0.5
		});
		ig.game.camera.lightAmplification = 6;
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
