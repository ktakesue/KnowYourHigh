import { Injectable } from "@angular/core";

@Injectable()
export class AnswersService {
  total;

  constructor() {
    console.log("ANSWER SERVICE INSTANTIATING");
  }

  selectedAnswers = {};

  public setAnswer(questionId, points) {
    this.selectedAnswers[questionId] = points;
  }

  public calculateTotal() {
    const result = Object.values(this.selectedAnswers).reduce(
      (acc: number, num: number) => {
        return acc + num;
      },
      0
    );

    if (result >= 0 && result < 10) {
      console.log("YOU AINT THAT HIGH BITCH", result);
    } else if (result > 10 && result < 20) {
      console.log("YOU'RE ON KUSH TRAINING WHEELS, BEEF UP!!", result);
    } else if (result > 20 && result < 30) {
      console.log(
        "YOU'RE a BIT HIGH YOU SHOULD TAKE A BREATHER (not a puff)",
        result
      );
    } else if (result > 30 && result < 40) {
      console.log("DUDE CALM YOUR TITS", result);
    } else {
      console.log("JUST GO TO FUCKING BED", result);
    }
    this.total = result;
    return result;
  }

  public getTotal() {
    return this.total;
  }
}
