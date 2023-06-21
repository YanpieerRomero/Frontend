import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Local } from 'src/app/models/Local';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-list-local',
  templateUrl: './list-local.component.html',
  styleUrls: ['./list-local.component.css']
})
export class ListLocalComponent implements OnInit {
  displayStyle: string;
  inputLocalBody: Local;
  showBtnUpdate: boolean;
  @Input() inputListLocalFromApp: Local[];

  constructor(private _localService: LocalService, private toastr: ToastrService) {
    this.displayStyle = 'none';
    this.showBtnUpdate = false;
    this.inputListLocalFromApp = [];
    this.inputLocalBody = new Local('', '', '',
      '', '', '',
      '', '', '',
      '');
  }

  ngOnInit(): void {
    this.getLocals();
    console.log('Starting list');
  }

  getLocals(): void {
    this._localService.getLocals().subscribe({
      next: (data) => {
        this.inputListLocalFromApp = data;
      },
      error: (error) => {
        this.toastr.error('Opps... Ocurrió un error', 'Error')
        console.log(error);
      }
    })
  }

  openPopup(local: Local, listLocal: Local[]): void {
    this.displayStyle = 'block';
    this.inputLocalBody = local;
    this.inputListLocalFromApp = listLocal;
    this.showBtnUpdate = true;
  }

  sendPropertyDisplayStyle(): string {
    return this.displayStyle;
  }

  sendListLocal(): Local[] {
    return this.inputListLocalFromApp;
  }

  sendValueBtnUpdate(): boolean {
    return this.showBtnUpdate;
  }

  sendLocalBodyUpdate(): any {
    return this.inputLocalBody;
  }

  changePropertyDisplayStyle(showDisplayStyle: string): void {
    this.displayStyle = showDisplayStyle;
  }

  changeValueListLocal(outputListLocal: Local[]): void {
    this.inputListLocalFromApp = outputListLocal;
  }

  changeValueBtnUpdate(outputBtnUpdate: boolean): void {
    this.showBtnUpdate = outputBtnUpdate;
  }

  deleteLocal(local: Local, listLocal: Local[]): void {
    this.inputListLocalFromApp = listLocal;
    this.inputLocalBody = local;
    this._localService.deleteLocal(local.localCode).subscribe({
      next: () => {
        this.getLocals();
        this.toastr.error('El local fue eliminado exitosamente!', 'Eliminado');
      },
      error: (error) => {
        this.toastr.error('Opps... Ocurrió un error', 'Error')
        console.log(error);
      }
    });
  }

  isEmptyLocal(local: Local[]): boolean {
    return local.length === 0;
  }

}
