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
import { ReactiveFormsModule } from "@angular/forms";
import { UserFormContainerComponent } from "./containers/user-form-container/user-form-container.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

@NgModule({
  declarations: [
    UsersContainerComponent,
    UserListItemComponent,
    UserFormContainerComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
