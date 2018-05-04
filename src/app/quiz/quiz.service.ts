import { Injectable } from "@angular/core";

export interface Question {
  questionId: number;
  question: string;
  answers: Array<Answer>;
}

export interface Answer {
  answer: string;
  points: number;
}

@Injectable()
export class QuizService {
  constructor() {}

  public getQuestion(questionId: number): Question {
    return this.QandA.filter((q: Question) => q.questionId === questionId)[0];
  }

  private QandA: Array<Question> = [
    {
      questionId: 1,
      question: "Can you open your eyes all the way?",
      answers: [
        {
          answer: "yes",
          points: 0
        },
        {
          answer: "no",
          points: 3
        }
      ]
    },
    {
      questionId: 2,
      question: "Can you remember why you are taking this quiz?",
      answers: [
        {
          answer: "yes",
          points: 0
        },
        {
          answer: "no",
          points: 3
        }
      ]
    },
    {
      questionId: 3,
      question: "Did you smoke a bowl, bong, or blunt?",
      answers: [
        {
          answer: "bowl",
          points: 2
        },
        {
          answer: "bong",
          points: 4
        },
        {
          answer: "blunt",
          points: 6
        }
      ]
    }
  ];
}
