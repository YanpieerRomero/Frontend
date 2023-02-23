import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  urlName: string;
  urlShort: string;
  urlProcessed: boolean;
  loading: boolean;
  showError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.urlName = '';
    this.urlShort = '';
    this.urlProcessed = false;
    this.loading = false;
    this.showError = false;
    this.textError = '';
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty   
  }

  processUrl(): void {
    if (this.urlName === '') {
      this.handleError('Enter a URL, please!');
      return;
    }

    this.urlProcessed = false;
    this.loading = true;

    setTimeout(() => {
      this.getUrlShort();
    }, 2000);
  }

  getUrlShort(): void {
    this._shortUrlService.getUrlShort(this.urlName).subscribe({
      next: (data) => {
        this.loading = false;
        this.urlProcessed = true;
        this.urlShort = data.link;
      },
      error: (errorData) => {
        console.log(errorData);
        this.loading = false;
        this.urlName = '';
        if (errorData.error.description === 'The value provided is invalid.') {
          this.handleError('URL entered is invalid!');
        }
      }
    });
  }

  handleError(errorMessage: string): void {
    this.showError = true;
    this.textError = errorMessage;
    setTimeout(() => {
      this.showError = false;
    }, 4000);
  }

}
