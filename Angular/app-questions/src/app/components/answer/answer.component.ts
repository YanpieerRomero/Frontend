import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    listQuestions: Question[];
    userAnswers: any[];

    constructor(private _questionService: QuestionService, private router: Router) {
        this.listQuestions = _questionService.questions;
        this.userAnswers = _questionService.userAnswers;
    }

    ngOnInit(): void {
        //
    }

    back() {
        this._questionService.userAnswers = [];
        this.router.navigate(['/']);
    }

}
