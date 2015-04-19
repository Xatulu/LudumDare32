ig.module(
	'game.entities.triggerending'
)
	.requires(
		'plusplus.entities.trigger',
	    'impact.sound'	
)
	.defines(function(){

		ig.EntityTriggerending = ig.global.EntityTriggerending = ig.EntityTrigger.extend({
			_wmScalable: true,
			_wmDrawBox: true,
			_wmBoxColor: 'rgba(255,100,100,0.7)',
			frozen: true,
			target: {},
			sortTargetsBy: null,
			targetSequence: [],
			wait: 0,

            check: function(entity) {
                this.parent(entity);
                var player = ig.game.getPlayer();
                ig.music.stop();
                player.healthmeter = null;
                player.sandmeter = null;
                player.score = null;
            }

		});
	});