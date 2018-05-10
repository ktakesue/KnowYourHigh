import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";
import { Keepalive } from "@ng-idle/keepalive";

@Component({
  selector: "kt-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
  ngOnInit() {}
}
