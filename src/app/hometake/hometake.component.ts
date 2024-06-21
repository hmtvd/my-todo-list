


import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './hometake.component.html',
  styleUrls: ['./hometake.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class HometakeComponent {
  @Input() public taskTitle: string = '';
  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();

  showerror: boolean = false;

  // constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskTitle) {
      this.taskAdded.emit(this.taskTitle);
      this.taskTitle = '';
      this.showerror = false;
    } else{
      this.showerror = true;
    }
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   templateUrl: './hometake.component.html',
//   styleUrls: ['./hometake.component.scss'],
//   standalone: true,
//   imports: [FormsModule]
// })
// export class HometakeComponent {
//   @Input() public taskTitle: string = '';
//   @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();

//   placeholder: string = 'Enter task title';

//   addTask(): void {
//     if (this.taskTitle.trim()) {
//       this.taskAdded.emit(this.taskTitle);
//       this.taskTitle = '';
//       this.placeholder = 'Enter task title'; // Reset placeholder
//     } else {
//       this.placeholder = 'Please type a valid title'; // Show error message in placeholder
//     }
//   }
// }

