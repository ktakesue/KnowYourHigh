import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";

@Component({
  selector: "kt-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
  providers: [QuizService, AnswersService]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  points: Answer["points"];

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    public answersService: AnswersService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(value => {
      this.question = this.quizService.getQuestion(parseInt(value.questionId));
    });
  }

  submitAnswer() {
    console.log("your answer's points: ", this.points);
    const nextQuestionId = this.question.questionId + 1;
    this.router.navigateByUrl(`quiz/question/${nextQuestionId}`);
    // const selectedAnswers = [];
    // selectedAnswers.push(this.points);
    // console.log("selectedAnswers", selectedAnswers);
  }

  handleChange(points: number) {
    this.points = points;
    console.log("points", points);
  }

  prevQuestion() {
    console.log("go back bruh", this.points);
    const prevQuestionId = this.question.questionId - 1;
    this.router.navigateByUrl(`quiz/question/${prevQuestionId}`);
  }

  goBack() {
    this.router.navigateByUrl("quiz");
  }

  ngOnInit() {}
}
