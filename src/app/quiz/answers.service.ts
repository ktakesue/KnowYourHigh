import { Injectable } from "@angular/core";

@Injectable()
export class AnswersService {
  constructor() {}

  selectedAnswers = {};

  public setAnswer(questionId, points) {
    // console.log("SET ANSWER", this.selectedAnswers);
    this.selectedAnswers[questionId] = points;
  }

  public getResults() {
    const result = Object.values(this.selectedAnswers).reduce(
      (acc: number, num: number) => {
        return acc + num;
      },
      0
    );
    console.log("result", result);
  }
}
