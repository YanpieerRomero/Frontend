import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public questions: Question[];
  questionIndex: number;
  selectedOption: Answer | null;
  disableBtn: boolean;
  confirmatedQuestion: boolean;
  answerIndex!: number;
  userAnswers: Array<number>;

  constructor() {
    this.questions = [
      new Question('What is the capital of Argentina?', [
        new Answer('Buenos Aires', 1),
        new Answer('Asuncion', 0),
        new Answer('Montevideo', 0),
        new Answer('Lima', 0),
      ]),
      new Question('What is the capital of France?', [
        new Answer('Sao Paulo', 0),
        new Answer('Paris', 1),
        new Answer('Madrid', 0),
        new Answer('Roma', 0),
      ]),
      new Question('What is the capital of Egypt?', [
        new Answer('Washington DC', 0),
        new Answer('Santiago of Chile', 0),
        new Answer('El Cairo', 1),
        new Answer('Londres', 0),
      ]),
    ];
    this.questionIndex = 0;
    this.selectedOption = null;
    this.disableBtn = true;
    this.confirmatedQuestion = false;
    this.userAnswers = [];
  }

  getQuestions() {
    return this.questions.slice();
  }
}
