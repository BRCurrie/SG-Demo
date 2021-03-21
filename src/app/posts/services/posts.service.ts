import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  readonly postsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
