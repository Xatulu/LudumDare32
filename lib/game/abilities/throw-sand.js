ig.module('game.abilities.throw-sand')
.requires(
	'plusplus.abilities.ability-shoot',
	'game.entities.sand'
)
.defines(function(){
	ig.ThrowSand = ig.AbilityShoot.extend({
		spawningEntity: ig.EntitySand,
		offsetVelX: 300,
		offsetVelY: 50,
		relativeVelPctX: 500,
		relativeVelPctY: 500,
		shootLocationMinPctY: 0.5,
		shootLocationMaxPctY: 1
	});
});