import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { Task } from './task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports:  [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
