import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from "./task/task.model";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  isAddingTask = false; 
  
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id: string) {
    
  }
  onStartAddTask() {
     this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    
    this.isAddingTask = false;
  }
}
