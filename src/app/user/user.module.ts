import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UsersContainerComponent } from "../user/containers/users-container/users-container.component";
import { UserListItemComponent } from "../user/components/user-list-item/user-list-item.component";
import { StoreModule } from "@ngrx/store";
import * as fromUser from "./store/reducers/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/effects/user.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UsersContainerComponent, UserListItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
