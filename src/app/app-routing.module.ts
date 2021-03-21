import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full",
  },
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },
  {
    path: "**",
    redirectTo: "users",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
