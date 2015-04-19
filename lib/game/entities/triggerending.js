ig.module(
	'game.entities.triggerending'
)
	.requires(
		'plusplus.entities.trigger'
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

			trigger: function(entity, needsActivation, entityIsChecking) {
				var karma = entity.karma;
				this.handleTargets(entity, karma, needsActivation);
			},

			handleTargets: function(entity, karma, needsActivation){
				for (var i = 0, il = this.targetSequence.length; i < il; i++) {

                    var target = this.targetSequence[i];
                    if(karma>75){
                    	target.setLevel('goodending');
                    } else if (karma <25){
                    	target.levelName = badending;
                    	target.level = badending;
                    } else {
                    	target.levelName = ending;
                    	target.level = ending;
                    }
                }
			}
		});
	});