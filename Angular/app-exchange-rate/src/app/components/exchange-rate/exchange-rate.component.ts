import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  amount: number = 0;
  currentCurrency: string = 'USD';
  exchangeCurrency: string = 'EUR';
  total: number = 0;
  currencies: Map<string, number> = new Map<string, number>([
    ['USD', 1],
    ['EUR', 0.94],
    ['LIBRA', 0.83],
  ]);


  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
  }

  getKeys(map: Map<string, number>): string[] {
    return Array.from(map.keys());
  }

  convertCurrency(): void {
    this.total = this.amount * this.currencies.get(this.exchangeCurrency)!/this.currencies.get(this.currentCurrency)!;
  }
}
