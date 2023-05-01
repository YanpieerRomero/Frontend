import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  firstName: string;
  title: string;
  id: string;

  constructor() {
    this.imgUrl = '';
    this.firstName = '';
    this.title = '';
    this.id = '';
  }

  ngOnInit(): void {
    this.imgUrl = this.user.picture;
    this.firstName = this.user.firstName;
    this.title = this.user.title;
    this.id = this.user.id;
  }
}
