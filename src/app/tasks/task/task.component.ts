import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports:  [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
