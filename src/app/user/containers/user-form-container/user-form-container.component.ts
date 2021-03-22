import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as userStore from "../../store/selectors/user.selectors";
import { User } from "../../models/user";

@Component({
  selector: "app-user-form-container",
  templateUrl: "./user-form-container.component.html",
  styleUrls: ["./user-form-container.component.scss"],
})
export class UserFormContainerComponent implements OnInit {
  user$: Observable<User> = this.store.select(userStore.selectUser);

  constructor(private store: Store<{ users: User[] }>) {}

  onCreate(user: User) {
    this.store.dispatch({
      type: "[User/API] Add User",
      user: user,
    });
  }

  onUpdate(user: User) {
    this.store.dispatch({
      type: "[User/API] Update User",
      user: user,
    });
  }

  onRemove(id: number) {
    this.store.dispatch({
      type: "[User/API] Delete User",
      id: id,
    });
  }

  ngOnInit(): void {}
}
