import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  btnString: string;

  constructor(
    public _questionService: QuestionService,
    private router: Router
  ) {
    this.btnString = 'Accept';
  }
  ngOnInit(): void {
    //
  }

  nextQuestion() {
    switch (this.btnString) {
      case 'Accept':
        this._questionService.confirmatedQuestion = true;
        this.btnString = 'Next';
        if (
          this._questionService.questions.length - 1 ===
          this._questionService.questionIndex
        ) {
          this.btnString = 'Finish';
        }
        break;
      case 'Next':
        this._questionService.questionIndex++;
        this._questionService.userAnswers.push(
          this._questionService.answerIndex
        );
        this._questionService.disableBtn = true;
        this._questionService.confirmatedQuestion = false;
        this.btnString = 'Accept';
        break;
      case 'Finish':
        this._questionService.userAnswers.push(
          this._questionService.answerIndex
        );
        this._questionService.selectedOption = null;
        this._questionService.confirmatedQuestion = false;
        this._questionService.questionIndex = 0;
        this.router.navigate(['/answer']);
        break;
    }
  }
}
