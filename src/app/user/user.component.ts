import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  @Input() user!: User;
  @Output() selectedUser = new EventEmitter<string>();
  @Input() selected!: boolean;

  // selectedUser = DUMMY_USERS[randomIndex];
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.selectedUser.emit(this.user.id);
  }
}
