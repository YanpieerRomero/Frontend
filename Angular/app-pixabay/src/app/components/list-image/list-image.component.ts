import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {
  term: string;
  subscription: Subscription;
  listImages: any[];
  loading: boolean;
  imagesByPage: number;
  currentlyPage: number;
  calculateTotalPages: number;

  constructor(private _imageService: ImageService) {
    this.term = '';
    this.listImages = [];
    this.loading = false;
    this.imagesByPage = 30;
    this.currentlyPage = 1;
    this.calculateTotalPages = 0;
    this.subscription = this._imageService.getSearchTerm().subscribe({
      next: (data) => {
        this.term = data;
        this.currentlyPage = 1;
        this.loading = true;
        setTimeout(() => this.getImages(), 1000);
      }
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  getImages(): void {
    this._imageService.getImages(this.term, this.imagesByPage, this.currentlyPage).subscribe({
      next: (data) => {
        this.loading = false;
        if (data.hits.length === 0) {
          this.listImages = [];
          this._imageService.setError('Ups... No results found');
          return;
        }
        this.calculateTotalPages = Math.ceil(data.totalHits / this.imagesByPage);
        this.listImages = data.hits;
      },
      error: (error) => {
        console.log(error);
        this._imageService.setError('Ups... An error occurred');
        this.loading = false;
      }
    });
  }

  previousPage(): void {
    this.currentlyPage--;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }

  nextPage(): void {
    this.currentlyPage++;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }

  previousPageClass(): boolean {
    return this.currentlyPage === 1;
  }

  nextPageClass(): boolean {
    return this.currentlyPage === this.calculateTotalPages;
  }

}
