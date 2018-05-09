import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "kt-timeout",
  templateUrl: "./timeout.component.html",
  styleUrls: ["./timeout.component.scss"]
})
export class TimeoutComponent implements OnInit {
  constructor(private router: Router) {}

  restart() {
    this.router.navigateByUrl("quiz");
  }

  goHome() {
    this.router.navigateByUrl("");
  }

  ngOnInit() {}
}
