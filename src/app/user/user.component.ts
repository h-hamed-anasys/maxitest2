import { Component , EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  @Input() user!:{avatar: string; name: string; id: string;};
  @Output() selectedUser = new EventEmitter<string>();

  
  // selectedUser = DUMMY_USERS[randomIndex];
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser(){
    this.selectedUser.emit(this.user.id);
  }
}
