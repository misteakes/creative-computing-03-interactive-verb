function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

for(var i=0; i<200; i++) {

	var shape = document.createElement('div');
	shape.classList.add('shape');
	var container = document.querySelector('.content');
	container.append(shape);
}


var shapes = document.querySelectorAll('.shape');

shapes.forEach(function(shape, i) {
	var percentage = i / 200 * 100; 

	var color = hslColor(i+180, i, percentage);
	shape.style.background = color;
});