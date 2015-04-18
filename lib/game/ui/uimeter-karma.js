ig.module(
	'game.ui.uimeter-karma'
)
.requires(
	'plusplus.core.config',
	'plusplus.ui.ui-meter'
)
.defines(function(){

	var _c = ig.CONFIG;

	ig.UIMeterKarma = ig.UIMeter.extend({
     fillStyle: 'rgb(127,127,127)',
     margin: { x: 0.02, y: 0.02 },
     size: { x: 8, y: 8 },
     animSettings: true,
     meterValue: 0.5,

     drawMeter: function(karma){
			per = (karma)/100;
        	this.fillStyle='rgb('+per*255+','+per*255+','+per*255+')';
        	this.rebuild();
     }
	});
});