import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";

@Component({
  selector: "kt-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
  providers: [AnswersService]
})
export class ResultComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private answersService: AnswersService
  ) {}

  result = this.answersService.getResults();

  ngOnInit() {}
}
