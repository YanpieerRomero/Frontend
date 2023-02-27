import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  title: string;
  id: string | undefined;

  constructor(private fb: FormBuilder, private _cardService: CardService, private toastr: ToastrService) {
    this.loading = false;
    this.title = 'ADD CARD';
    this.form = this.fb.group({
      owner: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirationDate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    this._cardService.getUpdateCard().subscribe({
      next: (data) => {
        this.id = data.id;
        console.log(data);
        this.title = 'Update Card';
        this.form.patchValue({
          owner: data.owner,
          cardNumber: data.cardNumber,
          expirationDate: data.expirationDate,
          cvv: data.cvv,
        });
      }
    })
  }

  saveCard(): void {
    if (this.id === undefined) {
      this.addCard();
      return;
    }
    this.updateCard(this.id);
  }

  addCard() {
    const CARD: CreditCard = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expirationDate: this.form.value.expirationDate,
      cvv: this.form.value.cvv,
      creationDate: new Date(),
      updateDate: new Date(),
    }
    console.log(CARD);
    this.loading = true;
    this._cardService.saveCard(CARD).then(() => {
      this.loading = false;
      console.log('Registered Card');
      this.toastr.success('Card was successfully registered!', 'Registered Card');
      this.form.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Ups... An error ocurred', 'Error')
      console.log(error);
    }
    );
  }

  updateCard(id: string) {
    const CARD: any = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expirationDate: this.form.value.expirationDate,
      cvv: this.form.value.cvv,
      updateDate: new Date(),
    }
    this.loading = true;
    this._cardService.updateCard(id, CARD).then(() => {
      this.loading = false;
      this.title = 'Add Card';
      this.form.reset();
      this.id = undefined;
      this.toastr.info('Card was successfully updated!', 'Card Updated');
    }, error => {
      console.log(error);      
    });
  }

}
