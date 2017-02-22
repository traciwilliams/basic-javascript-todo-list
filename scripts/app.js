window.onload = function(){
	console.log("javascript file loaded");
};

/*PSUEDO CODE --- 
need to make variables for the form, the input and list item
need to select the form
need to select the value that is inputted
need to select the ordered list
when someone clicks on the submit button it should 
put the value that is inputted into the ordered list
display the value on the page*/

var taskForm = document.getElementById("taskForm"); //form
var taskInput = document.getElementsByTagName("input")[0].value; //input
var newItem = document.createElement("li"); //list item
var button = document.getElementsByTagName("button"); //button

function submitTask() {
	newItem.innerhtml = taskInput;
	taskForm.appendChild(newItem);
};

submitTask();
// button.addEventListener("click", submitTask);