import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  text: string;
  showErrorText: boolean;
  subscription: Subscription;

  constructor(private _imageService: ImageService) {
    this.text = '';
    this.showErrorText = false;
    this.subscription = this._imageService.getError().subscribe({
      next: (data) => {
        this.showErrorMessage();
        this.text = data;
      }
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showErrorMessage(): void {
    this.showErrorText = true;
    setTimeout(() => {
      this.showErrorText = false;
    }, 2000);
  }
  
}
