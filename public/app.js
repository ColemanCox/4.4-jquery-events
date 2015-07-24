function() {
  var h2El;
  var inputEl;
  var buttonEls;

 var students = [
'Alia',
'Jacklyn',
'Corbon',
'Coleman',
'Scott',
'Brent',
'Marvin',
'Daniel'
];

var renderHeader = function() {
  if (inputEl.value) {
    h2El.innerHTML = inputEl.value;

  }
};
 students.forEach(function(student) {
  var buttonString = '<button>' + students[i] + '</button>';
  document.querySelector('body').innerHTML += buttonString;

 });
for (var i = students.length - 1; i >= 0; i--) {

}


 h2El = document.querySelector('h2');
 inputEl = document.querySelector('input');

 buttonEls = document.querySelectorAll('button');

for (var x = 0; x < buttonEls.length; x++) {
  buttonEl[x].onclick = renderHeader;

}
}

// var b = function() {

// }   preffered layout of objects
