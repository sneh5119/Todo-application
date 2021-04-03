import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('box') inputName;

  ngOnInit(): void {
     this.getTodosData();
  }


  getTodosData(){    
    this.todos=this.todoService.getTodos();
    console.log("todos array =>> ",this.todos)
  }

  addTask(val){
    let count=this.todos.length+1;
    let task={
       id:count++,
       description:val
     }
     this.todos.push(task);
     this.inputName.nativeElement.value='';
  }

  delete(){
    console.log("deleted");
  }

  edit(){
    console.log("edited");
  }

}
