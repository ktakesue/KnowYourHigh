import { OverlayContainer } from "@angular/cdk/overlay";
import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { ActivationEnd, Router, NavigationEnd } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";

@Component({
  selector: "kt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "KNOW YOUR HIGH";
  themeClass: string;
}
