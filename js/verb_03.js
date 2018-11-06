for(var i=0; i<35; i++) {

	var shape = document.createElement('div');
	shape.classList.add('shape');
	var container = document.querySelector('.content');
	container.append(shape);

}

shape.addEventListener('mouseover', function(event){
    shape.classList.add('shape-interaction');
  });

  // select container div
  var container = document.querySelector('.content');

  // add the div to the DOM
  container.append(shape);

var shapes = document.querySelectorAll('.shape');

shapes.forEach(function(shape, i){
  shape.addEventListener('mouseover', function(event){

    if (shape.classList.contains('shape-interaction')) {
      shape.classList.remove('shape-interaction');
    } else {
      shape.classList.add('shape-interaction');
    }
    
  });
});
