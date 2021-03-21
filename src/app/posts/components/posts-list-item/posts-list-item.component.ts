import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-posts-list-item",
  templateUrl: "./posts-list-item.component.html",
  styleUrls: ["./posts-list-item.component.scss"],
})
export class PostsListItemComponent implements OnInit {
  @Input()
  post: Post;

  constructor() {}

  ngOnInit(): void {}
}
