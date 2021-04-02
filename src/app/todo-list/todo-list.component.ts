import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
     this.getTodosData();
  }


  getTodosData(){    
    this.todos=this.todoService.getTodos();
    console.log("todos array =>> ",this.todos)
  }

}
