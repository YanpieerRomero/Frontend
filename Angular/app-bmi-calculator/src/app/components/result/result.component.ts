import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bmi: number;
  result: string;
  interpretation: string;

  constructor(private route: ActivatedRoute) {
    this.bmi = parseFloat(route.snapshot.paramMap.get('value')!);
    this.result = '';
    this.interpretation = '';   
  }

  ngOnInit(): void {
    this.getResult();
  
  }

  getResult(): void {
    if (this.bmi >= 25) {
      this.result = 'Overweight';
      this.interpretation = 'You have a higher than normal body weight. Try to exercise more'
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.interpretation = 'You have a normal body weight. Good job!'
    } else {
      this.result = 'Underweight';
      this.interpretation = 'You have a lower than normal body weight. You can eat a little more'
    }
  }
}
