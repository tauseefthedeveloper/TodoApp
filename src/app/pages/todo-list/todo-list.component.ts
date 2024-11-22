import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  TodoList?:any;
  localData:any;
  todoStatus:any;
  todoStatusVal:String='All'
  NumberOfTodos:number=0;
  NumberOfCompleteTodo:number=0;
  NumberOfPendingTodo:number=0;
  constructor (private router:Router) {
    this.localData=localStorage.getItem('TodoData');
    this.TodoList =JSON.parse(this.localData);
    this.NumberOfTodos=this.TodoList.length;
    console.log(this.TodoList)
    for(const item of this.TodoList){
      if(item.isCompleted){
        this.NumberOfCompleteTodo++;
      }
      else{
        this.NumberOfPendingTodo++;
      }
    }
  }

  onDelete(item:number){
    if(this.TodoList !=null){
      const userConfirm=confirm("Are you sure to delete the todo task?");
      if(userConfirm){
        this.TodoList.splice(item, 1);
        localStorage.setItem("TodoData", JSON.stringify(this.TodoList));
        alert('Todo task deleted!');
      }
    }
    else{
      alert("Todo is not deleted");
    }
    
  }
  onEdit(index: number) {
    this.router.navigate([`/layout/add-todo/${index}`]);
  }
  changeStatus(){
    if(this.todoStatusVal=='Completed'){
      this.todoStatus=true;
    }
    else{
      this.todoStatus=false;
    }
  }

}
