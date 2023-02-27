import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  nameImage: string;

  constructor(private _imageService: ImageService) {
    this.nameImage = '';
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  searchImages(): void {
    if (this.nameImage === '') {
      this._imageService.setError('Add a search text');
      return;
    }

    this._imageService.sendSearchTerm(this.nameImage);
  }

}
