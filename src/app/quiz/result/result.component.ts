import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswersService } from "../answers.service";

@Component({
  selector: "kt-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  total: number;
  low = "YOU AINT THAT HIGH BITCH";
  medium = "YOU'RE a BIT HIGH YOU SHOULD TAKE A BREATHER (not a puff)";
  high = "DUDE CALM YOUR TITS";
  tooHigh = "JUST GO TO BED";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private answersService: AnswersService
  ) {}

  ngOnInit() {
    // console.log("HELLLLLOOOO", this.answersService.getTotal());
    this.total = this.answersService.total;
    // if (this.total >= 0 && this.total < 10) {
    //   return "YOU AINT THAT HIGH BITCH";
    // } else if (this.total > 10 && this.total < 20) {
    //   return "YOU'RE a BIT HIGH YOU SHOULD TAKE A BREATHER (not a puff)";
    // } else if (this.total > 20 && this.total < 30) {
    //   return "DUDE CALM YOUR TITS";
    // } else {
    //   return "JUST GO TO BED";
    // }
  }
}
