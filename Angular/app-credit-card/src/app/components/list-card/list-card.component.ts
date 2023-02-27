import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  listCards: CreditCard[];
  showColOfTable: boolean;

  constructor(private _cardService: CardService, private toastr: ToastrService) {
    this.listCards = [];
    this.showColOfTable = false;
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this._cardService.getCards().subscribe({
      next: (data) => {
        this.listCards = [];
        data.forEach((element: any) => {
          this.listCards.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data(),
          });
        });
        this.getShowColOfTable();
        console.log(this.listCards);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getShowColOfTable() {
    this.showColOfTable = this.listCards.length > 0;    
  }

  deleteCard(id: any): void {
    this._cardService.deleteCard(id).then(() => {
      this.toastr.error('Card was successfully deleted!', 'Registration Delete');
    }, error => {
      this.toastr.error('Ups... An error ocurred', 'Error')
      console.log(error);
      
    });
  }

  updateCard(card: CreditCard) {
    this._cardService.addUpdateCard(card);
  }

}
