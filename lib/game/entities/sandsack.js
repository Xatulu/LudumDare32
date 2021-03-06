ig.module('game.entities.sandsack')
.requires(
	'plusplus.core.config',
	'plusplus.core.entity',
	'impact.sound'
)
.defines(function(){
	var _ut = ig.utils;
	ig.global.EntitySandsack = ig.EntitySandsack = ig.EntityExtended.extend({

		collides: ig.EntityExtended.COLLIDES.NEVER,
		sandsackSFX: new ig.Sound('media/sounds/sandbag.ogg'),
		
		size: {
			x: 32,
			y: 32
		},
		animSheet: new ig.AnimationSheet('media/sandsack.png',32,32),
		animSettings: {
			idle: {
				sequence: [0],
				frameTime: 1
			}
		},
        initTypes: function() {
            this.parent();
            _ut.addType(ig.EntityExtended, this, 'checkAgainst', "PLAYER");
        },
        check: function(){
        	this.parent();
	       	var player = ig.game.getEntityByName('player');
        	player.updateSand();
        	this.sandsackSFX.play();
        	this.kill();
        }
	});
});