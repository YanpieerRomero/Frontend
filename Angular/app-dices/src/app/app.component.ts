import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-dices';
  leftDice = '../assets/img/dice1.png';
  rightDice = '../assets/img/dice4.png';
  numberOne: number = 1;
  numberTwo: number = 2;

  throwDices(): void {
    this.numberOne = Math.round(Math.random() * 5) + 1;
    this.numberTwo = Math.round(Math.random() * 5) + 1;
    this.leftDice = '../assets/img/dice' + this.numberOne + '.png';
    this.rightDice = '../assets/img/dice' + this.numberTwo + '.png';
  }
}
