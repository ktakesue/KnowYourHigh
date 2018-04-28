import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { QuizComponent } from "./quiz/quiz.component";
import { InfoComponent } from "./info/info.component";
import { DefaultComponent } from "./default/default.component";
import { QuestionsComponent } from "./quiz/questions/questions.component";

const routes: Routes = [
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "",
    component: DefaultComponent
  },
  {
    path: "questions",
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
