window.onload = function(){
	console.log("javascript file loaded");
};

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


// function submitTask() {
// 	var taskInput = document.getElementsByTagName("input")[0].value;//get the value from the input field	
// 	document.getElementsByTagName("input")[0].value = ''; //this clears the field for new items to be added

// 	var newItem = document.createElement("li"); //ceates an li
// 	newItem.innerHTML = taskInput;//makes a list item with the value entered

// 	document.getElementById("taskList").appendChild(newItem);//appends new item to the unordered list  
	
// 	};
	
// 	document.getElementsByTagName("button")[0].addEventListener("click", submitTask);//calls submitTask function on the button click

	

/*function submitTask(e) {
	//var taskInput = document.getElementsByTagName("input")[0].value;//get the value from the input field	
 	//document.getElementsByTagName("input")[0].value = ''; //this clears the field for new items to be added

 	"use strict";
    e.preventDefault();

    var taskList = document.getElementById("taskList");
 	var newItem = document.createElement("li"); //creates an li
 	var taskInput = document.getElementsByTagName("input")[0].value;//get the value from the input field
 	var t = document.createTextNode(taskInput);//makes a list item with the value entered
 	newItem.appendChild(t);

 	taskList.innerHTML += '<li>' + taskInput + '</li>';
};


document.getElementsByTagName("button")[0].addEventListener("click", submitTask);//calls submitTask function on the button click
*/


//making our todoList object
//an empty array to push the todos into
var todoList = {
		todos:[], 
		
		displayToDos: function() {
			if(this.todos.length === 0){
				console.log("Your Todo List is Empty");
			} else {
				console.log("My todos:");
				for (var i = 0; i < this.todos.length; i++) {
					if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText); 
					} else {
					console.log('()', this.todos[i].todoText);
			  }
			}
		  }
		},	


		addToDo: function(todoText) {
			this.todos.push ({
				todoText: todoText,
				completed: false
			});
			this.displayToDos();
		},

		changeToDo: function(position, todoText) {
			this.todos[position].todoText = todoText;
			this.displayToDos();
		},
		deleteToDo: function(position) {
			this.todos.splice(position, 1);
			this.displayToDos();
		},
		toggleCompleted: function(position) {
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			this.displayToDos();
		},
		toggleAll: function() {
			var totalTodos = this.todos.length;
			var completedTodos = 0;

			for (var i = 0; i < totalTodos; i++) {
				if (this.todos[i].completed === true){
					 completedTodos++;
				}
			}
			if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} 	else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayToDos();
  	}
  };		



var displayToDosButton = document.getElementById("displayToDosButton");
console.log(displayToDosButton);

displayToDosButton.addEventListener('click', function() {
	todoList.displayToDos();
})



