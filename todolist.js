var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
 
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  if (tar.style.textDecoration == "line-through"){
    tar.parentNode.removeChild(tar);
  }
 
  else{
    tar.style.textDecoration = "line-through";
   }
    
  }
  
, false);
