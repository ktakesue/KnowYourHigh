import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "kt-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
  providers: [QuizService]
})
export class ResultComponent implements OnInit {
  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {}
}
