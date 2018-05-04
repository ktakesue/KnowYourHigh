import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { QuizComponent } from "./quiz/quiz.component";
import { InfoComponent } from "./info/info.component";
import { DefaultComponent } from "./default/default.component";
import { QuestionsComponent } from "./quiz/questions/questions.component";
import { ResultComponent } from "./quiz/result/result.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    pathMatch: "full"
  },
  {
    path: "quiz/question/:questionId",
    component: QuestionsComponent
  },
  {
    path: "quiz/question",
    redirectTo: "quiz/question/1"
  },
  {
    path: "quiz/result",
    component: ResultComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },

  {
    path: "info",
    component: InfoComponent
  },

  {
    path: "**",
    component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
