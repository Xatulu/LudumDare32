ig.module(
	'game.ui.uimeter-sand'
)
.requires(
	'plusplus.core.config',
	'plusplus.ui.ui-meter'
)
.defines(function(){

	var _c = ig.CONFIG;

	ig.UIMeterSand = ig.UIMeter.extend({
     fillStyle: 'rgb(196,134,0)',
     margin: { x: 0.02, y: 0.02 },
     size: { x: 8, y: 8 }
	});
});