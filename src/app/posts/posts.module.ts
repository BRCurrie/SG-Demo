import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsContainerComponent } from "./container/posts-container/posts-container.component";
import { PostsListItemComponent } from "./components/posts-list-item/posts-list-item.component";
import { StoreModule } from "@ngrx/store";
import * as fromPost from "./store/reducers/post.reducer";
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effects';

@NgModule({
  declarations: [PostsContainerComponent, PostsListItemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.reducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostsModule {}
