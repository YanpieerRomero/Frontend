import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Local } from 'src/app/models/Local';

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.css'],
})
export class CreateLocalComponent implements OnInit {
  displayStyle: string;
  showBtnRegister: boolean;
  @Output() outputListLocalFromCreate = new EventEmitter<Local[]>();

  constructor() {
    this.displayStyle = 'none';
    this.showBtnRegister = false;
  }

  ngOnInit() {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  openPopup(): void {
    this.displayStyle = 'block';
    this.showBtnRegister = true;
  }

  sendPropertyDisplayStyle(): string {
    return this.displayStyle;
  }

  sendValueBtnRegister(): boolean {
    return this.showBtnRegister;
  }

  changePropertyDisplayStyle(showDisplayStyle: string): void {
    this.displayStyle = showDisplayStyle;
  }

  changeValueListLocal(outputListLocal: Local[]): void {
    this.outputListLocalFromCreate.emit(outputListLocal);
  }
}
