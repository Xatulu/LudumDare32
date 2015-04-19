ig.module('game.entities.mary')
.requires(
	'plusplus.abstractities.creature',
    'plusplus.helpers.utils'
)
.defines(function(){

	var _ut = ig.utils;

	ig.EntityMary = ig.global.EntityMary = ig.Creature.extend({
		size: {x: 18, y: 56},
		collides: ig.EntityExtended.COLLIDES.NEVER,
		animSheet: new ig.AnimationSheet("media/enemy3.png", 18, 56),
		animInit: "idleX",
		animSettings: {
			idleX: {sequence: [0,1,2,3], frameTime: 0.2},
		},
		maxVelGrounded: {x: 75, y: 75},
		frictionGrounded: {x: 800, y: 800},
		speed: {x: 75,	y: 75},
		canJump: false,
		canClimb: false,    
		name: "mary",
		canWanderX: false,
		wanderSwitchChance: 0.005,
		wanderSwitchChanceStopped: 0.02,
        deathSettings: {
                spawnCountMax: 3,
                spawnSettings: {
                    animTileOffset: ig.EntityParticleColor.colorOffsets.RED
                }
            },	

        initTypes: function() {

            this.parent();
            _ut.addType(ig.EntityExtended, this, 'group', "ENEMY", "GROUP");
        },

	});
});