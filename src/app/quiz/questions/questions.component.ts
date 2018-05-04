import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "kt-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
  providers: [QuizService]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(value => {
      this.question = this.quizService.getQuestion(parseInt(value.questionId));
    });
  }

  ngOnInit() {}
}
