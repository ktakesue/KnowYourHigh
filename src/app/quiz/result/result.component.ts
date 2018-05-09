import { Component, OnInit } from "@angular/core";
import { AnswersService } from "../answers.service";
import { Router } from "@angular/router";

@Component({
  selector: "kt-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  total: number;
  tooLow = "YOU AINT EVEN HIGH BITCH, GO SMOKE SOME GREENs";
  low = "YOU'RE ON KUSH TRAINING WHEELS, BEEF UP!!";
  medium = "YOU'RE a BIT HIGH YOU SHOULD TAKE A BREATHER (not a puff)";
  high = "DUDE CALM YOUR TITS, THEY'RE FALLING OFF";
  tooHigh = "JUST GO TO FUCKING BED";
  status = "YOUR STATUS IS";

  constructor(public answersService: AnswersService, private router: Router) {}

  restart() {
    this.router.navigateByUrl("quiz");
  }

  goHome() {
    this.router.navigateByUrl("");
  }

  ngOnInit() {
    this.total = this.answersService.total;
  }
}
