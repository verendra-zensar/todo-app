import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todolist:string[]=[];
  inputvalue: string="";

  constructor() { }

  ngOnInit(): void {

    this.todolist=["task1","task2"]
  }
  removetodo(name:string):void{
    this.todolist= this.todolist.filter(value => value!== name)
  }

  addtodo()
  {
    if(this.inputvalue==="")
    {
      alert("please enter the value")
    }
    else{
    this.todolist.push(this.inputvalue);
    this.inputvalue="";
  }
}
}
