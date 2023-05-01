import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: any[];
  loading: boolean;

  constructor(private _userService: UserService) {
    this.listUsers = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe({
      next: (data) => {
        this.listUsers = data.data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
