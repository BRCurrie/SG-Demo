import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersContainerComponent } from '../user/containers/users-container/users-container.component';
import { UserListItemComponent } from '../user/components/user-list-item/user-list-item.component';


@NgModule({
  declarations: [UsersContainerComponent, UserListItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
