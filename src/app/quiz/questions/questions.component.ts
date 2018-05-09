import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";

@Component({
  selector: "kt-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  points: Answer["points"];

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private answersService: AnswersService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(value => {
      this.question = this.quizService.getQuestion(parseInt(value.questionId));
    });
  }

  handleChange(points: number) {
    this.points = points;
  }

  nextQuestion() {
    console.log("your answer's points: ", this.points);
    const nextQuestionId = this.question.questionId + 1;
    this.router.navigateByUrl(`quiz/question/${nextQuestionId}`);
  }

  startTime() {
    setInterval((router: Router) => {
      this.router.navigateByUrl("timeout");
    }, 60000);
  }

  submitAnswer(questionId: number, points: number) {
    this.answersService.setAnswer(this.question.questionId, this.points);
    console.log("SUBMITTED ANSWERS :", this.answersService.selectedAnswers);
  }

  prevQuestion() {
    console.log("go back bruh", this.points);
    const prevQuestionId = this.question.questionId - 1;
    this.router.navigateByUrl(`quiz/question/${prevQuestionId}`);
  }

  calculateResult() {
    this.answersService.calculateTotal();
    this.router.navigateByUrl("quiz/result");
  }

  goBack() {
    this.router.navigateByUrl("quiz");
  }

  ngOnInit() {}
}
