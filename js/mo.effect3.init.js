// Btn animation
var els = document.querySelectorAll('.btn-white');
[].forEach.call( els, function(el) {
var elSpan = el.querySelector('span'),
    timeline = new mojs.Timeline(),
	scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
	
// burst animation
tween1 = new mojs.Burst({
	parent: el,
	duration: 1500,
	shape : 'circle',
	fill : '#ffffff',
	x: '50%',
	y: '50%',
	opacity: 0.6,
	childOptions: { radius: {20:0} },
	radius: {20:80},
	angle: {0: 140},
	count: 15,
	isRunLess: true,
	easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
}),

// icon scale animation
new mojs.Tween({
	duration : 800,
	easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
	onUpdate: function(progress) {
		var scaleProgress = scaleCurve(progress);
	}
});

timeline.add(tween1);
el.addEventListener('mouseenter', function () { //mousedown
    timeline.start();
});

});