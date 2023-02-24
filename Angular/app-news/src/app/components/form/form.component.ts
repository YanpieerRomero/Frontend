import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() parametersSelected = new EventEmitter<any>();

  categorySelected: string;
  countrySelected: string;
  categories: any[];
  countries: any[];

  constructor() {
    this.categorySelected = 'general';
    this.countrySelected = 'gb';
    this.categories = [
      { value: 'general', name: 'General' },
      { value: 'business', name: 'Business' },
      { value: 'entertainment', name: 'Entertainment' },
      { value: 'health', name: 'Health' },
      { value: 'science', name: 'Science' },
      { value: 'sports', name: 'Sports' },
      { value: 'technology', name: 'Technology' }, 
    ];
    this.countries = [
      { value: 'ar', name: 'Argentina' },
      { value: 'br', name: 'Brazil' },
      { value: 'fr', name: 'France' },
      { value: 'hu', name: 'Hungary' },
      { value: 'mx', name: 'Mexico' },
      { value: 'gb', name: 'United Kingdom' },
    ];
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
  }

  searchNews(): void {
    const PARAMETERS = {
      category: this.categorySelected,
      country: this.countrySelected,
    }

    this.parametersSelected.emit(PARAMETERS);
  }

}
