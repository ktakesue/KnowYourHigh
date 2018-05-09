import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "kt-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {
  constructor(private router: Router) {}
  startTime() {
    setInterval((router: Router) => {
      this.router.navigateByUrl("timeout");
    }, 120000);
  }

  ngOnInit() {}
}
