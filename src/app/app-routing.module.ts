import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { QuizComponent } from "./quiz/quiz.component";
import { InfoComponent } from "./info/info.component";
import { DefaultComponent } from "./default/default.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
