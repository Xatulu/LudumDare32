ig.module('game.entities.sand')
.requires(
	'plusplus.abstractities.projectile'
)
.defines(function(){
	ig.EntitySand = ig.global.EntitySand = ig.Projectile.extend({
		collides: ig.EntityExtended.COLLIDES.LITE,
		size: {x: 4, y: 4},
		offset: {x: 2, y: 2},
		animSheet: new ig.AnimationSheet("media/sand.png", 8, 8),
		animInit: "idleX",
		animSettings: {
			moveX: { sequence: [0], frameTime: 1 },
			deathX: { sequence: [1, 2], frameTime: 0.1}
		},
		damage: 1, //Schaden? TODO
		lifeDuration: 0.5,
		gravityFactor: 0.6,
		friction: {x: 0, y: 0}, // Friction?
		bounciness: 1, 
		collissionKills: true,
		randomVel: true
	});
});