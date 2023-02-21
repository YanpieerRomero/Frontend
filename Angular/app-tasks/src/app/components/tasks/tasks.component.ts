import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];
  taskName = '';

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty      
  }

  addTask() {
    const task: Task = {
      name: this.taskName,
      status: false
    }

    this.tasks.push(task);

    this.taskName = '';
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  updateTask(task: Task, index: number): void {
    this.tasks[index].status = !task.status;    
  }

}
