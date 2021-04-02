import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[]=[];


  constructor() { }

  getTodos(){

    return [
      {
        id:1,
        title:"todo1",
        description:"walking",
        status:"backlog"
      },
      {
        id:2,
        title:"todo2",
        description:"running",
        status:"backlog"
      },
      {
        id:3,
        title:"todo3",
        description:"swimming",
        status:"backlog"
      },

    ];
  }

}
