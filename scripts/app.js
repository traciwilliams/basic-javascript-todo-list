window.onload = function(){
	console.log("javascript file loaded");
};



var btnNew = document.getElementById("subBtn");//button





//making our todoList object
//an empty array to push the todos into
var todoList = {
		todos:[], 
		todoComment: [],

		addToDo: function(todoText) {
			this.todos.push ({
				todoText: todoText,
				completed: false
			});
			
		},

		addComment: function(todoComment) {
			this.todoComment.push ({
				todoComment: todoComment
			});
			console.log(this.todoComment);
		},


		changeToDo: function(position, todoText) {
			this.todos[position].todoText = todoText;
			
		},
		deleteToDo: function(position) {
			this.todos.splice(position, 1);
			
		},
		toggleCompleted: function(position) {
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			
		},
		toggleAll: function() {
			var totalTodos = this.todos.length;
			var completedTodos = 0;
			//var todo = this.todos[position];

			//get number of completed todos
			for (var i=0; i < totalTodos; i++){
				if(this.todos[i].completed === true) {
					completedTodos++;
				}
			}
			//if everything is true, make everything false
			//this.todos.forEach(function(todo) {
			if(completedTodos === totalTodos) {
				for (var i = 0; i < totalTodos; i++) {
					this.todos[i].completed = false;
				}
				} else {
				for (var i = 0; i < totalTodos; i++) {

				}
			}
			//this.displayToDos()
  		}
  	};		


var buttonHandlers = {


	addToDo: function() {
		var addToDoTextInput = document.getElementById("addToDoTextInput");
		todoList.addToDo(addToDoTextInput.value);
		addToDoTextInput.value = "";
		view.displayToDos();
	},


	changeToDo: function() {
		var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
		var changeToDoPositionText = document.getElementById("changeToDoPositionText");

		todoList.changeToDo(changeToDoPositionInput.valueAsNumber,changeToDoPositionText.value);
	
		changeToDoPositionInput.value = "";
		changeToDoPositionText.value = "";

		view.displayToDos();
	},

	deleteToDo: function(position) {
		todoList.deleteToDo(position);
		view.displayToDos();
	},

	toggleCompleted: function() {
		var toggleCompInputButton = document.getElementById("toggleCompdInputButton");
		var toggleCompInput = document.getElementById("toggleCompInput");

		todoList.toggleCompleted(toggleCompInput.valueAsNumber);

		toggleCompInput.value = "";

		view.displayToDos();

	},

	toggleAll: function() {
		todoList.toggleAll();

		view.displayToDos();
	}

};



var view = {
	displayToDos: function() {
		var todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
		
		todoList.todos.forEach (function(todo, position) {
			var todosLi = document.createElement("li");
			var todoTextWithCompletion = "";
			//var todo = todoList.todos[i];


			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todosLi.id = position;
			todosLi.textContent = todoTextWithCompletion;
			todosLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todosLi);
		}, this);
	},

	createDeleteButton: function() {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		return deleteButton;
	},

	setUpEventListeners: function() {
		var todosUl = document.querySelector("ul");
		todosUl.addEventListener("click", function(event){
		console.log(event.target.parentNode.id);

		var elementClicked = event.target;
		if(elementClicked.className === "deleteButton"){
		buttonHandlers.deleteToDo(parseInt(elementClicked.parentNode.id));	
			}
		});	
	}
};
	view.setUpEventListeners();



