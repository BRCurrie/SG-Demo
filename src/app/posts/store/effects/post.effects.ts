import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { PostsService } from "../../services/posts.service";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostsService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Post/API] Load Posts"),
      mergeMap(() =>
        this.postService.getAllPosts().pipe(
          map((posts) => ({
            type: "[Post/API] Load Posts Success",
            posts: posts,
          }))
        )
      )
    )
  );
}
