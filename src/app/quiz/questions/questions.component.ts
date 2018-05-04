import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";

@Component({
  selector: "kt-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
  providers: [QuizService]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  answerIndex: number | undefined;

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
    console.log("your final answer index is:", this.answerIndex);

    const nextQuestionId = this.question.questionId + 1;
    this.router.navigateByUrl(`quiz/question/${nextQuestionId}`);
  }

  handleChange(answerIndex: number) {
    this.answerIndex = answerIndex;
    console.log(answerIndex);
  }

  ngOnInit() {}
}
