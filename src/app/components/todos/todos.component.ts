import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    // test array
    /*this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]*/
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo() {
    if (this.inputTodo != "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
    }


    this.inputTodo = "";
  }

}
