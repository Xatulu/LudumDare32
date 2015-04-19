ig.module(
	'game.entities.spawnpoint'
)
	.requires(
		'plusplus.entities.checkpoint'
)

	.defines(function(){

		ig.EntitySpawnpoint = ig.global.EntitySpawnpoint = ig.EntityCheckpoint.extend({
			restorativeSpawn: false,

            activate: function(entity) {

                this.parent(entity);

                if (entity instanceof ig.Character) {
                    this.linkSpawned(entity);
                }
            },

            spawned: function(entity) {

                this.parent(entity);
                entity.healthmeter.setMeterValue(this.health / this.healthMax);

            }

		});
	});