// window.onload = function(){
// 	console.log("javascript file loaded");
// };

/*PSUEDO CODE --- 
need to make variables for the form, the input and list item
need to select the form
need to select the value that is inputted
need to select the div
when someone clicks on the submit button it should 
put the value that is inputted into the div 
(First create an LI node,
then get the value
then append the value to the LI node.
Finally append the LI to the list.)
display the value on the page

*/

// var taskForm = document.getElementById("taskForm"); //form
// var button = document.getElementsByTagName("button"); //button
//  document.getElementById("taskList").appendChild(newItem);//appends to list unordered list
// document.getElementById("subBtn").addEventListener("click", submitTask);


var btnNew = document.getElementById("subBtn");//button


function submitTask() {
	var taskInput = document.getElementsByTagName("input")[0].value;//get the value from the input field	
	document.getElementsByTagName("input")[0].value = ''; //this clears the field for new items to be added

	var newItem = document.createElement("li"); //ceates an li
	newItem.innerHTML = taskInput;//makes a list item with the value entered

	document.getElementById("taskList").appendChild(newItem);//appends new item to the unordered list  
	};
	
	document.getElementsByTagName("button")[0].addEventListener("click", submitTask);//calls submitTask function on the button click












