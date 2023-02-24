import { Component } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNews: any[];
  loading: boolean;

  constructor(private _newService: NewService) {
    this.listNews = [];
    this.loading = false;
  }

  searchNews(parameters: any): void {
    this.loading = true;
    this.listNews = [];
    setTimeout(() => {
      this._newService.getNews(parameters).subscribe({
        next: (data) => {
          console.log(data);
          this.loading = false;
          this.listNews = data.articles;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        }
      });
    }, 1000);
  }
}
