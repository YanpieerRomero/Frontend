import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weight: number = 60;
  age: number = 25;
  height: number = 170;
  sex: string = 'Male';

  constructor(private router: Router) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  changeHeight(event: any) {
    this.height = event.target.value;
  }

  male(): void {
    this.sex = 'Male';
  }

  female(): void {
    this.sex = 'Female';
  }

  calculateBMI(): void {
    const BMI = this.weight / Math.pow((this.height / 100), 2);    
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
