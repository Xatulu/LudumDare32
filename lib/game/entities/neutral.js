ig.module('game.entities.neutral')
.requires(
	'plusplus.abstractities.creature',
    'plusplus.helpers.utils'	
)
.defines(function(){

	var _ut = ig.utils;
	var rand_no = Math.floor(Math.random()*10+1);

	ig.EntityNeutral = ig.global.EntityNeutral = ig.Creature.extend({
		size: {x: 56, y: 77},
		health: 5,
		collides: ig.EntityExtended.COLLIDES.NEVER,
		animSheet: new ig.AnimationSheet("media/enemy_2.png", 56, 80),	
		animInit: "idleX",
		animSettings: {
			idleX: {sequence: [0,1,2], frameTime: 0.1},
			moveX: {sequence: [3,4,5], frameTime: 0.07},
			jumpX: {sequence: [6,7,8], frameTime: 0.4},
			deathX: {sequence: [27, 28, 29], frameTime: 0.3}
		},
		maxVelGrounded: {x: 100, y: 10},
		frictionGrounded: {x: 800, y: 800},
		speed: {x: 100,	y: 100},
		canJump: true,
		canClimb: true,
		canWanderX: true,
		canWanderY: true,
		wanderSwitchChance: 0.005,
		wanderSwitchChanceStopped: 0.015,
        deathSettings: {
                spawnCountMax: 3,
                spawnSettings: {
                    animTileOffset: ig.EntityParticleColor.colorOffsets.RED
                }
            },	

        initTypes: function() {

            this.parent();

            _ut.addType(ig.EntityExtended, this, 'type', "DAMAGEABLE");

            _ut.addType(ig.EntityExtended, this, 'group', "ENEMY", "GROUP");

        },
        kill: function(){
        	this.parent();
        	var player = ig.game.getEntityByName('player');
        	player.updateKarma(-5);
        }
	});
});