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
	'game.levels.office_morning',
	'game.levels.office_evening',
    'impact.sound'	
)
.defines(function(){
    var _c = ig.CONFIG;	
	var myGameClass = ig.GameExtended.extend({

		clearColor: "#000000",
		gameState: 0,
shapesPasses: [
    // for climbing
    // we ignore solids and one ways
    // to only retrieve climbable areas
    {
        ignoreSolids: true,
        ignoreOneWays: true
    },
    // for lighting and shadows
    // we ignore climbables and the edge boundary
    {
        ignoreClimbable: true,
        // throw away the inner loop of the edge of the map
        discardBoundaryInner: true,
        // throw away the outer loop of the edge of the map
        retainBoundaryOuter: false
    }
],
	init: function() {
		this.parent();
		this.loadLevel(ig.global.LevelTitle);
	},
	inputStart: function(){
			this.parent();
			ig.input.bind(ig.KEY.F, 'shoot');
			ig.input.bind(ig.KEY.ENTER, 'start');
			ig.input.bind(ig.KEY.C, 'tap');	
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
					ig.music.add('media/music/song1.ogg');
					ig.music.add('media/music/song2.ogg');
					ig.music.add('media/music/song3.ogg');
					ig.music.add('media/music/song4.ogg');
					ig.music.random = true;
					ig.music.next();
					ig.music.volume = 0.3;
					ig.music.play();
					this.gameState++;
					this.loadLevel(ig.global.LevelMorning);
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
