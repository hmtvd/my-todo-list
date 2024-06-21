

import { Component } from '@angular/core';

import { HometakeComponent } from './hometake/hometake.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HometakeComponent, TaskListComponent]
})
export class AppComponent {
  title = 'take';
  taskList: Task[] = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    // Add more tasks as needed
  ];
  
  initialTaskTitle: string = '';

  addTask(title: string): void {
    const newTask: Task = {
      id: this.taskList.length + 1,
      title,
      completed: false
    };
    this.taskList.push(newTask);
  }

  removeTask(id: number): void {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}
