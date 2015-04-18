ig.module(
	'game.ui.uimeter-health')
)
.requires(
	'plusplus.core.config',
	'plusplus.ui.ui-meter'
)
.defines(function(){

	var _c = ig.CONFIG;

	ig.UIMeterHealth = ig.UIMeter.extend({
     fillStyle: 'rgb(248,16,59)',
     margin: { x: 0.02, y: 0.02 },
     size: { x: 8, y: 8 }
	});
});