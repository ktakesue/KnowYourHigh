import { Injectable } from "@angular/core";

export interface Question {
  questionId: number;
  question: string;
  image?: string;
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
    },
    {
      questionId: 4,
      question: "Are you thinking of munchie concoctions right now?",
      answers: [
        {
          answer: "yes",
          points: 5
        },
        {
          answer: "no",
          points: 0
        }
      ]
    },
    {
      questionId: 5,
      question: "How does cleaning your whole house sound?",
      answers: [
        {
          answer: "HELL YES!",
          points: 5
        },
        {
          answer: "HELL NO!",
          points: 0
        }
      ]
    },
    {
      questionId: 6,
      question: "Who is Bob Ross?",
      image:
        "https://www.readjunk.com/wp-content/uploads/2015/11/article-thejoyofbobross.jpg",
      answers: [
        {
          answer: "an artistic genius who needs more recognition",
          points: 3
        },
        {
          answer: "my spirit animal",
          points: 6
        },
        {
          answer: "my dad",
          points: 9
        }
      ]
    },
    {
      questionId: 7,
      question: "How long ago did you smoke?",
      answers: [
        {
          answer: "whenever this quiz started",
          points: 4
        },
        {
          answer: "2+ hours ago bruh",
          points: 2
        },
        {
          answer: "i don't know the conception of time",
          points: 6
        }
      ]
    },
    {
      questionId: 8,
      question: "Wh",
      answers: [
        {
          answer: "an artistic genius who needs more recognition",
          points: 3
        },
        {
          answer: "my spirit animal",
          points: 6
        },
        {
          answer: "my dad",
          points: 9
        }
      ]
    }
  ];
}
