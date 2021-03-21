import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as postStore from "../../store/selectors/post.selectors";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-posts-container",
  templateUrl: "./posts-container.component.html",
  styleUrls: ["./posts-container.component.scss"],
})
export class PostsContainerComponent implements OnInit {
  posts$: Observable<Post[]> = this.store.select(postStore.selectPostsByUserId);

  constructor(private store: Store<{ posts: Post[] }>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: "[Post/API] Load Posts" });
  }
}
