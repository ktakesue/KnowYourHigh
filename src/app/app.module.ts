import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuizComponent } from './quiz/quiz.component';
import { InfoComponent } from './info/info.component';
import { DefaultComponent } from './default/default.component';
import { QuestionsComponent } from './quiz/questions/questions.component';


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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
