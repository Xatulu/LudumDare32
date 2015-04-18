ig.module( 'game.entities.player')
.requires(
	'plusplus.abstractities.player',
	'game.abilities.throw-sand'
)
.defines(function(){
	ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
		size: {x: 56, y: 77},
		health: 100,
		animSheet: new ig.AnimationSheet("media/player.png", 56,80),
		animInit: "idleX",
		animSettings:  {
			idleX: {sequence: [0,1,2], frameTime: 0.1},
			moveX: {sequence: [3,4,5], frameTime: 0.07},
			jumpX: {sequence: [6,7,8], frameTime: 0.4},
			shootX: {sequence: [12,13,14], frameTime: 0.25}
		},
		initProperties: function(){
			this.parent();
			this.shoot = new ig.ThrowSand(this),
			this.abilities.addDescendants([this.shoot]);
		},
		handleInput: function(){
			this.parent();
			if(ig.input.pressed('shoot')){
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
				this.shoot.activate({
		            x: this.flip.x ? this.pos.x -15 : this.pos.x + this.size.x + 15,
           		 	y: this.pos.y + this.size.y * (Math.random()*(0.7-0.1)+0.1)
				});
			}
		}
	});
});