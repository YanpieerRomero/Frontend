import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  urlImg: string;
  phone: string;
  gender: string;
  loading: boolean;

  constructor(
    private toRoute: ActivatedRoute,
    private _userSerive: UserService
  ) {
    this.id = this.toRoute.snapshot.paramMap.get('id')!;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.urlImg = '';
    this.phone = '';
    this.gender = '';
    this.loading = true;
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._userSerive.getUser(this.id).subscribe({
      next: (data) => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.urlImg = data.picture;
        this.phone = data.phone;
        this.gender = data.gender;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }
}
