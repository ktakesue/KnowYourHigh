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

  submitAnswer(questionId: number, points: number) {
    this.answersService.setAnswer(this.question.questionId, this.points);
    console.log("SUBMITTED ANSWERS :", this.answersService.selectedAnswers);
  }

  prevQuestion() {
    console.log("go back bruh", this.points);
    const prevQuestionId = this.question.questionId - 1;
    this.router.navigateByUrl(`quiz/question/${prevQuestionId}`);
  }

  // undoAnswer() {
  //   const index = this.selectedAnswers.indexOf(this.points);
  //   this.selectedAnswers.splice(index, 1);
  //   console.log("UNDO ANSWERS :", this.selectedAnswers);
  // }

  calculateResult() {
    this.answersService.getResults();
    this.router.navigateByUrl("quiz/result");
    // console.log("SUBMITTED ANSWERS :", this.answersService.selectedAnswers);
  }

  goBack() {
    this.router.navigateByUrl("quiz");
  }

  ngOnInit() {}
}
