ig.module( 'game.entities.player')
.requires(
	'plusplus.abstractities.player',
	'game.abilities.throw-sand',
    'game.ui.uimeter-health',
    'game.ui.uimeter-sand',
    'game.ui.uimeter-karma'
)
.defines(function(){
		var _c = ig.CONFIG;
		var _ut = ig.utils;

	ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
		size: {x: 56, y: 77},
		health: 100,
		animSheet: new ig.AnimationSheet("media/player.png", 56,80),
		animInit: "idleX",
		name: "player",
		healthmeter: null,
		sandmeter: null,
		karma: 50,
		sand: 50,
		speed: {x: 50,	y: 500},
		attackSFX: new ig.Sound('media/sounds/attack.ogg'),
		attack2SFX: new ig.Sound('media/sounds/attack2.ogg'),
		damageSFX: new ig.Sound("media/sounds/hit.ogg"),
		animSettings:  {
			idleX: {sequence: [0,1,2], frameTime: 0.1},
			moveX: {sequence: [3,4,5], frameTime: 0.07},
			jumpX: {sequence: [6,7,8], frameTime: 0.4},
			shootX: {sequence: [12,13,14], frameTime: 0.25},
			deathX: {sequence: [27, 28, 29], frameTime: 0.3}
		},
        initTypes: function() {

            this.parent();

            _ut.addType(ig.EntityExtended, this, 'type', "DAMAGEABLE");

            _ut.addType(ig.EntityExtended, this, 'group', "FRIEND", "GROUP");
			if(!ig.global.wm){
	            healthmeter = ig.game.spawnEntity(ig.UIMeterHealth, 0, 0, {
	            	animSheetPath: 'meters.png',
	                animSettings: true,
	                marginAsPct: false,
	                margin: {
	                	x: 15,
	                    y: 15
			        }
			    });	
	            sandmeter = ig.game.spawnEntity(ig.UIMeterSand, 0, 0, {
	                animSheetPath: 'meters.png',
	                animTileOffset: 1,
	                animSettings: true,                            
	                linkedTo: healthmeter,
	                linkAlign: {
	                	x: 0,
	                    y: 1
	            	},
	                marginAsPct: false,
	                margin: {
	                	x: 0,
	                    y: 10
	                }
	            });
	            score = ig.game.spawnEntity(ig.UIMeterKarma, 0, 0, {
	                animSheetPath: 'meters.png',
	                animTileOffset: 2,
	                animSettings: true,                            
	                linkedTo: sandmeter,
	                linkAlign: {
	                    x: 0,
	                    y: 1
	                },
	                marginAsPct: false,
	                margin: {
	                    x: 0,
	                    y: 10
				    }
				});
        	}
		},
		initProperties: function(){
			this.parent();
			this.shoot = new ig.ThrowSand(this),
			this.abilities.addDescendants([this.shoot]);
		},

		handleInput: function(){
			this.parent();
			if(ig.input.pressed('shoot')){
				if (this.sand>0){
					this.attackSFX.volume=0.05;
					this.attackSFX.play();
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
					this.sand--;
					sandmeter.setMeterValue(this.sand/50);
				} 
			}
		},
		receiveDamage: function(amount, from, unblockable) {

                var killed = this._killed;
                var applied = this.parent(amount, from, unblockable);

                if (!killed && applied && this.health) {

                    healthmeter.setMeterValue(this.health / this.healthMax);

                }
                return applied;


        },
        updateKarma: function(amount){
        	this.karma+=amount;
        	if(this.karma<0){
        		this.karma=0;
        	} else if(this.karma>100){
        		this.karma=100;
        	}
        	score.setMeterValue(this.karma/100);
        	//score.drawMeter(this.karma);
        },
        updateSand: function(amount){
        	this.sand+=amount;
        	if(this.sand>100){
        		this.sand=100;
        	}
        	sandmeter.setMeterValue(this.sand/100);
        }
	});
});