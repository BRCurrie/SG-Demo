import { createSelector, createFeatureSelector } from "@ngrx/store";
import { selectRouteParams } from "src/app/core/store/selectors/router.selector";
import { Post } from "../../models/post.model";
import * as fromPost from "../reducers/post.reducer";

export interface State {
  posts: fromPost.State;
}

export const selectPostState = createFeatureSelector<fromPost.State>("posts");

export const selectPostEntities = createSelector(
  selectPostState,
  fromPost.selectEntities
);
export const selectAllPosts = createSelector(
  selectPostState,
  fromPost.selectAll
);

export const selectPostsByUserId = createSelector(
  selectAllPosts,
  selectRouteParams,
  (posts, { userId }): Post[] => posts.filter((posts) => posts.userId == userId)
);
