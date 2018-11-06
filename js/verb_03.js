for(var i=0; i<100; i++) {

	// create a div
	var shape = document.createElement('div');

	// add class "shape" to div
	shape.classList.add('shape');

	// select container div
	var container = document.querySelector('.content');

	// add the div to the DOM
	container.append(shape);

}
