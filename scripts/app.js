// window.onload = function(){
// 	console.log("javascript file loaded");
// };

/*PSUEDO CODE --- 
need to make variables for the form, the input and list item
need to select the form
need to select the value that is inputted
need to select the ordered list
when someone clicks on the submit button it should 
put the value that is inputted into the ordered list
display the value on the page


First create an LI node,
then create a Text node,
then append the Text node to the LI node.
Finally append the LI node to the list.



*/

var taskForm = document.getElementById("taskForm"); //form
var taskList = document.getElementById("taskList"); //orderded list
var button = document.getElementsByTagName("button"); //button


function submitTask(){
	var newItem = document.createElement("li"); //creates an li
	var taskInput = document.getElementById("user_task").value //get the value from the input field
 	newItem.appendChild(taskInput);//appends value to the li  
 	document.getElementById("taskList").appendChild(newItem);//appends to list unordered list
 };


// document.getElementById("subBtn").addEventListener("click", function(){
//     document.getElementById("taskList").innerHTML = "Hello World";
// });

document.getElementById("subBtn").addEventListener("click", submitTask);


