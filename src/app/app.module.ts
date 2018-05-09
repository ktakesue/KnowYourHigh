import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { QuizComponent } from "./quiz/quiz.component";
import { InfoComponent } from "./info/info.component";
import { DefaultComponent } from "./default/default.component";
import { ResultComponent } from "./quiz/result/result.component";
import { QuestionsComponent } from "./quiz/questions/questions.component";
import { TimeoutComponent } from "./quiz/timeout/timeout.component";

import { EmbedVideo } from "ngx-embed-video";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  //can add additional modules from Angular Materials here
  MatMenuModule,
  MatRadioModule,
  MatRippleModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
  MatListModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule
} from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import {
  Headers,
  HttpModule,
  Request,
  RequestOptions,
  Response
} from "@angular/http";
import { CommonModule } from "@angular/common";
import { FormControl, Validators } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { APIService } from "./api.service";
import { QuizService } from "./quiz/quiz.service";
import { AnswersService } from "./quiz/answers.service";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    QuizComponent,
    InfoComponent,
    DefaultComponent,
    QuestionsComponent,
    ResultComponent,
    TimeoutComponent
  ],
  imports: [
    //update Material Angular imports down here too!
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule,
    MatRippleModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    EmbedVideo.forRoot()
  ],
  providers: [QuizService, AnswersService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
