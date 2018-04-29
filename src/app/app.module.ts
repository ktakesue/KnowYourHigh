import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuizComponent } from './quiz/quiz.component';
import { InfoComponent } from './info/info.component';
import { DefaultComponent } from './default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  //can add additional modules from Angular Materials here
  MatMenuModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
  MatListModule,
  MatExpansionModule,
  MatToolbarModule
} from '@angular/material';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { ProgressSpinnerService } from './progress-spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    QuizComponent,
    InfoComponent,
    DefaultComponent,
    QuestionsComponent
  ],
  imports: [
    //update Material Angular imports down here too!
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  providers: [ProgressSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
