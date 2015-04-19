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
			deathX: { sequence: [1, 2], frameTime: 0.01}
		},
		damage: 2, //Schaden? TODO
		lifeDuration: 1.5,
		gravityFactor: 0.8,
		friction: {x: 80, y: 80}, // Friction?
		bounciness: 0.5, 
		//collissionKills: true
	});
});