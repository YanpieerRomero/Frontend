import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  listQuestions: Question[];

  constructor(public _questionService: QuestionService) {
    this.listQuestions = this._questionService.getQuestions();
  }

  ngOnInit(): void {
    //
  }

  getQuestion() {
    return this.listQuestions[this._questionService.questionIndex]
      .questionDescription;
  }

  selectedAnswer(answer: Answer, answerIndex: number) {
    if (this._questionService.confirmatedQuestion) {
      return;
    }
    this._questionService.selectedOption = answer;
    this._questionService.disableBtn = false;
    this._questionService.answerIndex = answerIndex;
  }

  addClassOption(answer: Answer): string {
    if (
      answer === this._questionService.selectedOption &&
      !this._questionService.confirmatedQuestion
    ) {
      return 'active text-light';
    }

    if (
      answer === this._questionService.selectedOption &&
      this._questionService.confirmatedQuestion &&
      this._questionService.selectedOption.isCorrect === 1
    ) {
      return 'list-group-item-success';
    }

    if (
      answer === this._questionService.selectedOption &&
      this._questionService.confirmatedQuestion &&
      this._questionService.selectedOption.isCorrect === 0
    ) {
      return 'list-group-item-danger';
    }
    return '';
  }

  correctIcon(answer: Answer) {
    if (
      answer === this._questionService.selectedOption &&
      this._questionService.confirmatedQuestion &&
      this._questionService.selectedOption.isCorrect === 1
    ) {
      return true;
    }
    return false;
  }

  incorrectIcon(answer: Answer) {
    if (
      answer === this._questionService.selectedOption &&
      this._questionService.confirmatedQuestion &&
      this._questionService.selectedOption.isCorrect === 0
    ) {
      return true;
    }
    return false;
  }
}
