ig.module(
	'game.entities.triggerlevelchange'
)
	.requires(
		'plusplus.entities.levelchange'
)
	.defines(function(){

		ig.EntityTriggerlevelchange = ig.global.EntityTriggerlevelchange = ig.EntityLevelchange.extend({


            activate: function(entity) {

                this.parent(entity);

                if (this.clearPersistentEntities) {

                    ig.game.clearPersistentEntities();

                } else if (this.clearPersistentPlayer) {

                    var player = ig.game.getPlayer();
                    var playerName = "player";

                    if (player) {

                        playerName = player.name || playerName;

                    }

                    ig.game.clearPersistentEntity(playerName);

                }
                var player = ig.game.getPlayer();
                if(player.karma>75){
	                ig.game.loadLevelDeferred('goodending', 'spawn');
                } else if (player.karma<25) {
					ig.game.loadLevelDeferred('badending','spawn');
				} else {
					ig.game.loadLevelDeferred('ending','spawn');
				}


            }

		})

	})