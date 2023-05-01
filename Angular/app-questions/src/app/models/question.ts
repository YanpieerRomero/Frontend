import { Answer } from "./answer";

export class Question {
    questionDescription: string;
    answers: Answer[];

    constructor(questionDescription: string, answers: Answer[]) {
        this.questionDescription = questionDescription;
        this.answers = answers;
    }
}