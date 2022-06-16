import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	@Input() selectionChange;

	@ViewChild('dialog') oDialog: ElementRef;
	@ViewChild('dialogInput') oDialogInput: ElementRef;
	@ViewChild('dialogDatePicker') oDialogDatePicker: ElementRef;
	dialogText: string;
	dialogDate: string;

	title = 'app';
	todos: Array<Todo> = [
		{
			text: 'Get some carrots',
			id: 1,
			deadline: '27/7/2018',
			done: false
		},
		{
			text: 'Do some magic',
			id: 2,
			deadline: '22/7/2018',
			done: false
		},
		{
			text: 'Go to the gym',
			id: 3,
			deadline: '24/7/2018',
			done: false
		},
		{
			text: 'Buy milk',
			id: 4,
			deadline: '30/7/2018',
			done: false
		},
		{
			text: 'Eat some fruits',
			id: 5,
			deadline: '29/7/2018',
			done: true
		}
	];
	id = 5;
	done = [];
	unDone = [];
	oItemToEdit: Todo = this.todos[0];

	constructor() {
		this.syncTodos();
	}

	handleAddTodo($event) {
		const newTodo: Todo = {
			text: $event.text,
			id: ++this.id,
			deadline: $event.date,
			done: false
		};

		this.todos.push(newTodo);
		this.syncTodos();
	}

	syncTodos() {
		this.done = this.todos.filter(todo => todo.done);
		this.unDone = this.todos.filter(todo => !todo.done);
	}

	editItem($event) {
		this.oItemToEdit = this.todos.find((oTodo) => {
			return oTodo.id === $event.id;
		});
		this.oDialog.nativeElement.show();
	}

	handleUndone($event) {
		const oCheckedIds = new Set(this.done.map(todo => todo.id));

		$event.selected.map((todo => {
			oCheckedIds.add(parseInt(todo.id, 10));
		}));

		this.todos.map((todo) => {
			todo.done = oCheckedIds.has(todo.id);
		});

		this.syncTodos();
	}

	handleDone($event) {
		const oCheckedIds = new Set($event.selected.map(todo => parseInt(todo.id, 10)));
		const oToUncheck = new Set();

		this.done.forEach((todo => {
			if (!oCheckedIds.has(todo.id)) {
			oToUncheck.add(todo.id);
			}
		}));

		this.todos.forEach((todo) => {
			todo.done = !oToUncheck.has(todo.id) && todo.done;
		});
		this.syncTodos();
	}

	removeItem($event) {
		this.todos = this.todos.filter(todo => todo.id !== $event);
		this.syncTodos();
	}

	closeDialog() {
		this.oDialog.nativeElement.close();
	}

	saveDialog() {
		this.todos.map((oTodo) => {
			if (oTodo.id === this.oItemToEdit.id) {
			oTodo.text = this.oDialogInput.nativeElement.value;
			oTodo.deadline = this.oDialogDatePicker.nativeElement.value;
			return;
			}
		});

		this.closeDialog();
	}
}


interface Todo {
	text: string;
	id: number;
	deadline: string;
	done: boolean;
}
