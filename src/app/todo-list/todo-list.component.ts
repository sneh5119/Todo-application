import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  idts;
  updatedVal="";
  selectedVal="backlog";
  getparams;
  statusFilter="All";

  constructor(
    private todoService : TodoService,
    private route:Router,
    private activatedRoute:ActivatedRoute) { }
  
    @ViewChild('box') inputName;

  ngOnInit(): void {
     this.getTodosData();
    //  this.getParams();
     
  }


  getTodosData(){    
    this.todos=this.todoService.getTodos();
    console.log("todos array =>> ",this.todos)
  }

  onchange(value,index){
    console.log("onchange value",value);
    console.log("onchange index",index)
    // this.selectedVal=value;
    this.todos[index].status=value;
    console.log("todos array =>> ",this.todos)
  }


  addTask(val){

    if(!val){
      alert("Please Enter Some Value !!!")
    }else{

      let count=this.todos.length+1;
    let task={
       id:count++,
       description:val,
       status:this.selectedVal
     }
     this.todos.push(task);
     this.inputName.nativeElement.value='';
     console.log("todos array =>> ",this.todos)
    }

    
  }

  delete(index){
    console.log("deleted");
    this.todos.splice(index,1);
  }

  edit(id){
    this.idts=id;
  }

  update(index,editval){
    if(!editval){
       alert("Please Enter Some Value !!!");
    }else{
      console.log("editval",editval);
      this.todos[index].description=this.updatedVal;
  
    }
    
  }


  onchange2(value){
    this.statusFilter=value;    
    console.log("value selected", value);
    this.route.navigate([],{queryParams:{'status':value}});
    setTimeout(()=>{
      this.getParams()
    },100);
    
  }

  getParams(){
    this.activatedRoute.queryParams.subscribe(getUrlParams=>{
      this.getparams=getUrlParams;    
    })
    console.log("params",this.getparams);
  }

  statusPageFilter(paramVal){
        
  }
}
