import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsContainerComponent } from "./container/posts-container/posts-container.component";

const routes: Routes = [
  {
    path: "",
    component: PostsContainerComponent,
  },
  {
    path: ":userId",
    component: PostsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
