import { Component, OnInit } from "@angular/core";
import { QuizService, Question, Answer } from "../quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";
import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";
import { Keepalive } from "@ng-idle/keepalive";

@Component({
  selector: "kt-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  points: Answer["points"];
  idleState = "Not started.";
  timedOut = false;
  lastPing?: Date = null;

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private answersService: AnswersService,
    private router: Router,
    private idle: Idle,
    private keepalive: Keepalive
  ) {
    this.activatedRoute.params.subscribe(value => {
      this.question = this.quizService.getQuestion(parseInt(value.questionId));
    });
    // sets an idle timeout of 30 seconds, for testing purposes.
    idle.setIdle(30);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => (this.idleState = "No longer idle."));
    idle.onTimeout.subscribe(() => {
      this.idleState = "Timed out!";
      this.timedOut = true;
      this.router.navigateByUrl("timeout");
    });
    idle.onIdleStart.subscribe(() => (this.idleState = "You've gone idle!"));
    idle.onTimeoutWarning.subscribe(
      countdown =>
        (this.idleState = "You will time out in " + countdown + " seconds!")
    );
    // sets the ping interval to 15 seconds
    keepalive.interval(15);
    keepalive.onPing.subscribe(() => (this.lastPing = new Date()));
    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = "Time started.";
    this.timedOut = false;
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

  calculateResult() {
    this.answersService.calculateTotal();
    this.router.navigateByUrl("quiz/result");
  }

  goBack() {
    this.router.navigateByUrl("quiz");
  }

  ngOnInit() {}
}
