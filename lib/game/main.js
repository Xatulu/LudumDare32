ig.module( 
	'game.main' 
)
.requires(
	'plusplus.core.plusplus',
	'game.levels.Morning',
	'game.levels.title',
	'game.levels.work',
	'game.levels.Evening',
	'game.levels.badending',
	'game.levels.goodending',
	'game.levels.ending',
    'impact.sound'	
)
.defines(function(){
    var _c = ig.CONFIG;	
	var myGameClass = ig.GameExtended.extend({

		clearColor: "#111111",
		gameState: 0,

	init: function() {
		this.parent();
		this.loadLevel(ig.global.LevelTitle);
	},
	inputStart: function(){
			this.parent();
			ig.input.bind(ig.KEY.F, 'shoot');
			ig.input.bind(ig.KEY.ENTER, 'start');
	},
	inputEnd: function(){
			this.parent();
			ig.input.bind(ig.KEY.F, 'shoot');
			ig.input.bind(ig.KEY.ENTER, 'start');
	},
		update: function(){
			switch(this.gameState){
				case 0:
					if(ig.input.pressed('start')){
					ig.music.add('media/music/music1.ogg');
					ig.music.add('media/music/music2.ogg');
					ig.music.add('media/music/music3.ogg');
					ig.music.random = true;
					ig.music.volume = 0.3;
					ig.music.play();
					this.gameState++;
					this.loadLevel(ig.global.LevelEvening);
					}
					break;
			}			
			this.parent();
		},
	});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', myGameClass, 60, _c.GAME_WIDTH, _c.GAME_HEIGHT, _c.SCALE, ig.LoaderExtended );

});
