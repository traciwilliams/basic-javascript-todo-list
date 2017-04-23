window.onload = function(){
	console.log("javascript file loaded");
};



var btnNew = document.getElementById("subBtn");//button





//making our todoList object
//an empty array to push the todos into
var todoList = {
		todos:[], 
		todoComment: [],
		// displayToDos: function() {
		// 	if(this.todos.length === 0){
		// 		console.log("Your Todo List is Empty");
		// 	} else {
		// 		console.log("My todos:");
		// 		for (var i = 0; i < this.todos.length; i++) {
		// 			if (this.todos[i].completed === true) {
		// 			console.log('(completed)', this.todos[i].todoText); 
		// 			} else {
		// 			console.log('(not completed)', this.todos[i].todoText);
		// 	  }
		// 	}
		//   }
		// },	


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
		
  	}
  };		


var buttonHandlers = {


	addToDo: function() {
		var addToDoTextInput = document.getElementById("addToDoTextInput");
		todoList.addToDo(addToDoTextInput.value);
		addToDoTextInput.value = "";
		view.displayToDos();
	},




	// addComment: function() {
	// 	var addCommentInput = document.getElementById("addCommentInput");
	// 	todoList.addComment(addCommentInput.value);
	// 	addCommentInput.value ="";
	// },







	changeToDo: function() {
		var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
		var changeToDoPositionText = document.getElementById("changeToDoPositionText");

		todoList.changeToDo(changeToDoPositionInput.valueAsNumber,changeToDoPositionText.value);
	
		changeToDoPositionInput.value = "";
		changeToDoPositionText.value = "";

		view.displayToDos();
	},

	deleteToDo: function() {
		var deleteToDoButton = document.getElementById("deleteToDoButton");
		var deleteToDoButtonInput = document.getElementById("deleteToDoButtonInput");
		todoList.deleteToDo(deleteToDoButtonInput.valueAsNumber);

		deleteToDoButtonInput.value = "";

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
	displayToDos: function(){
		var todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
		for (var i = 0; i < todoList.todos.length; i++) {
			var todosLi = document.createElement("li");
			var todoTextWithCompletion = "";
			var todo = todoList.todos[i];


			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todosLi.textContent = todoTextWithCompletion;
			//todosLi.textContent = todoList.todos[i].todoText;
			todosUl.appendChild(todosLi);
		}
	}
};



