ig.module('game.entities.enemy')
.requires(
	'plusplus.abstractities.creature',
    'plusplus.helpers.utils'	
)
.defines(function(){

	var _ut = ig.utils;
	var player = null;
	
	ig.EntityEnemy = ig.global.EntityEnemy = ig.Creature.extend({
		size: {x: 18, y: 56},
		health: 5,
		collides: ig.EntityExtended.COLLIDES.NEVER,
		animSheet: new ig.AnimationSheet("media/enemy1.png", 18, 56),
		animInit: "idleX",
		animSettings: {
			idleX: {sequence: [0,1,2,3], frameTime: 0.2},
			moveX: {sequence: [4,5,6,7,8,10,11,12,13,14], frameTime: 0.1}
		},
		maxVelGrounded: {x: 50, y: 50},
		frictionGrounded: {x: 800, y: 800},
		speed: {x: 50,	y: 50},
		canJump: true,
		canClimb: true,
		canWanderX: true,
		wanderSwitchChance: 0.005,
		wanderSwitchChanceStopped: 0.02,
		damageSFX: new ig.Sound("media/sounds/hit.ogg"),
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

            _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CHARACTER");

        },
        check: function(entity) {

            this.knockBack(entity);
            entity.receiveDamage(5, this);
	        entity.damageSFX.play();

        },
        knockBack: function(other) {
            if (other.pos.x < this.pos.x) {
                other.vel.x = -other.maxVel.x;
            } else if(other.pos.x > this.pos.x) {
                other.vel.x = other.maxVel.x;
            }
            
            if (other.pos.y < this.pos.y) {
                other.vel.y = -other.maxVel.y;
            } else if(other.pos.y > this.pos.y) {
                other.vel.y = other.maxVel.y;
            }
        },
        kill: function(){
        	this.parent();
        	var player = ig.game.getEntityByName('player');
        	player.updateKarma(5);
	        this.damageSFX.play();
        },
	
	});
});