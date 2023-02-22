import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employees-count',
  templateUrl: './employees-count.component.html',
  styleUrls: ['./employees-count.component.css']
})
export class EmployeesCountComponent implements OnInit{
  @Input() all: number;
  @Input() male: number;
  @Input() female: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'All';

  constructor() { 
    this.all = 0;
    this.male = 0;
    this.female = 0;
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty    
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }

}
