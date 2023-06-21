import { Component, OnInit } from '@angular/core';
import { Local } from './models/Local';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listLocal: Local[];

  constructor() {
    this.listLocal = [];
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
  changeValueListLocal(outputListLocal: Local[]): void {
    this.listLocal = outputListLocal;
  }

  sendValueListLocal(): Local[] {
    return this.listLocal;
  }
}
