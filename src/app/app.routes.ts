import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HometakeComponent } from './hometake/hometake.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: '', component: HometakeComponent },
  { path: 'tasks', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
