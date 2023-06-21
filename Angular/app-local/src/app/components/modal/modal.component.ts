import { Local } from 'src/app/models/Local';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() inputDisplayStyle: string;
  @Input() inputLocalBody: Local;
  @Input() inputListLocal: Local[];
  @Input() inputShowBtnRegister: boolean;
  @Input() inputShowBtnUpdate: boolean;
  @Output() outputListLocal = new EventEmitter<Local[]>();
  @Output() outputDisplayStyle = new EventEmitter<string>();
  @Output() outputBtnUpdate = new EventEmitter<boolean>();
  myForm: FormGroup;

  constructor(
    private _localService: LocalService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.inputDisplayStyle = '';
    this.inputShowBtnUpdate = false;
    this.inputShowBtnRegister = false;
    this.inputListLocal = [];
    this.inputLocalBody = new Local('', '', '', '', '', '', '', '', '', '');
    this.myForm = this.fb.group({
      companyCode: [null],
      localCode: [null],
      localName: [null],
      description: [null],
      cnpj: [null],
      cpf: [null],
      address: [null],
      contactTelephone: [null],
      contactEmail: [null],
      observations: [null],
    });
  }

  ngOnInit() {
    this.getLocals();
    console.log(this.inputLocalBody);
    console.log(this.inputDisplayStyle);
    console.log('Starting modal');
    if (this.inputLocalBody.localCode !== '') {
      console.log(this.inputLocalBody.localCode);
      this._localService.getLocal(this.inputLocalBody.localCode).subscribe({
        next: (data) => {
          console.log(data);
          const local: Local = data;
          this.myForm.patchValue({
            companyCode: local.companyCode,
            localCode: local.localCode,
            localName: local.localName,
            description: local.description,
            cnpj: local.cnpj,
            cpf: local.cpf,
            address: local.address,
            contactTelephone: local.contactTelephone,
            contactEmail: local.contactEmail,
            observations: local.observations,
          });
          console.log(this.myForm);
        },
      });
    }
  }

  saveLocal(dataSave: Local) {
    this._localService.postLocal(dataSave).subscribe({
      next: () => {
        this.closePopup();
        this.inputLocalBody = new Local('', '', '', '', '', '', '', '', '', '');
        this.toastr.success(
          'El local fue registrado exitosamente!',
          'Registrado'
        );
      },
      error: (error) => {
        this.toastr.error(error.error.title, 'Error');
        console.log(error);
      },
    });
    console.log(this.myForm);
  }

  updateLocal(dataUpdate: any) {
    this._localService.putLocal(dataUpdate).subscribe({
      next: () => {
        this.closePopup();
        this.toastr.info(
          'El local fue actualizado exitosamente!',
          'Actualizado'
        );
      },
      error: (error) => {
        this.toastr.error('Opps... Ocurrió un error', 'Error');
        console.log(error);
      },
    });
  }

  getLocals(): void {
    this._localService.getLocals().subscribe({
      next: (data) => {
        this.inputListLocal = data;
        this.outputListLocal.emit(this.inputListLocal);
      },
      error: (error) => {
        this.toastr.error('Opps... Ocurrió un error', 'Error');
        console.log(error);
      },
    });
  }

  closePopup(): void {
    this.inputLocalBody = new Local('', '', '', '', '', '', '', '', '', '');
    this.getLocals();
    this.inputDisplayStyle = 'none';
    this.outputDisplayStyle.emit(this.inputDisplayStyle);
    this.outputBtnUpdate.emit(false);
  }

  validateFields(inputLocalBody: Local): boolean {
    return inputLocalBody.localCode === '' || inputLocalBody.localName === '';
  }

  isInvalidOrValid(data: string): string {
    return data === '' || data === null ? 'is-invalid' : 'is-valid';
  }

  isEmptyOrValid(data: string): string {
    return data === '' || data === null ? '' : 'is-valid';
  }
}
