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
// //orderded list
// var button = document.getElementsByTagName("button"); //button


// document.getElementById("subBtn").addEventListener("click", submitTask);

 function submitTask(taskList, itemText){
 	//alert("adding new item");
 	event.preventDefault;
 	var newItem = document.createElement("li"); //creates an li
 	newItem.innerText = itemText;


 	taskList.appendChild(newItem);//appends value to the li  

// 	var taskInput = document.getElementById("user_task").value //get the value from the input field
//  	
//  	document.getElementById("taskList").appendChild(newItem);//appends to list unordered list
  };


var btnNew = document.getElementById("subBtn");//button
// btnNew.onclick = function() {
// 	alert("Does this button work?");
// 	console.log("any errors?");
// };

btnNew.onclick =  function (){
var itemText = prompt("What should we name this item");
submitTask(document.getElementById("taskList"), itemText);//no parenthesis because we want to assign the function to the onclick event and not run as soon as we load the page
};



