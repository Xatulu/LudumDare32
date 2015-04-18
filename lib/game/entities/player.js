ig.module( 'game.entities.player')
.requires(
	'plusplus.abstractities.player'
)
.defines(function(){
	ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
		size: {x: 56, y: 77},
		animSheet: new ig.AnimationSheet("media/player.png", 56,80),
		animInit: "idleX",
		animSettings:  {
			idleX: {sequence: [0,1,2], frameTime: 0.1},
			moveX: {sequence: [3,4,5], frameTime: 0.07},
			jumpX: {sequence: [6,7,8], frameTime: 0.4}
		}
	});
});