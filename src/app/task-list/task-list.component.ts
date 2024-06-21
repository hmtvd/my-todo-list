// import { Component, OnInit, Input } from '@angular/core';
// import { Task, TaskService } from '../task.service';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.scss'],
//   standalone: true
// })
// export class TaskListComponent implements OnInit {

//   @Input() tasks: Task[] = [];

//   constructor(private taskService: TaskService) {}

//   ngOnInit(): void {
//     this.tasks = this.taskService.getTasks();
//   }

//   toggleTaskCompletion(id: number): void {
//     this.taskService.toggleTaskCompletion(id);
//   }

//   removeTask(id: number): void {
//     this.taskService.removeTask(id);
//     this.tasks = this.taskService.getTasks(); // Update the tasks list
//   }
// }

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [CommonModule] 
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() taskRemoved = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  removeTask(id: number): void {
    this.taskRemoved.emit(id);
  }
}

