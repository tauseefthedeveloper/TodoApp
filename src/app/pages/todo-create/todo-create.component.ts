import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {

  addTodoObj:any={
    taskName: '',
    taskDescription: '',
    createdOn: this.getCurrentDate(),
    isCompleted: false,
    tags: '',
  };

  isEditMode = false;
  editTodoId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('index');
      console.log(id);
      if (id) {
        this.isEditMode = true;
        this.editTodoId = +id;
        this.loadTodoData(this.editTodoId);
      }
    });
  }
  loadTodoData(id: number) {
    const localData = localStorage.getItem('TodoData');
    const TodoList = localData ? JSON.parse(localData) : [];
    if (TodoList && TodoList[id]) {
      console.log(TodoList[id])
      this.addTodoObj = { ...TodoList[id] };
    } else {
      alert('Task not found!');
      this.router.navigate(['/home/todo-list']);
    }
  }
  addTodo() {
    if (this.addTodoObj.taskName && this.addTodoObj.taskDescription && this.addTodoObj.createdOn) {
      const existingTasks = localStorage.getItem("TodoData");
      const todoArray = existingTasks ? JSON.parse(existingTasks) : [];
  
      if (this.isEditMode && this.editTodoId !== null) {
        todoArray[this.editTodoId] = this.addTodoObj; 
        alert("Todo task updated!");
      } else {
        todoArray.push(this.addTodoObj);
        alert("Todo task created!");
      }
  
      localStorage.setItem("TodoData", JSON.stringify(todoArray));
  
      this.addTodoObj = {
        taskName: '',
        taskDescription: '',
        createdOn: '',
        isCompleted: false,
        tags: '',
      };
  
      this.router.navigate(['/layout/todo-list']);
    } else {
      alert("Please fill in all details!");
    }
  }
  
  
}
function getFormattedDate() {
  throw new Error('Function not implemented.');
}

