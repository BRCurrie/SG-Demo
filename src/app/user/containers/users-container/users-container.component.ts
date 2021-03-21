import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as userStore from "../../store/selectors/user.selectors";
import { User } from "../../models/user";

@Component({
  selector: "app-users-container",
  templateUrl: "./users-container.component.html",
  styleUrls: ["./users-container.component.scss"],
})
export class UsersContainerComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(userStore.selectAllUsers);

  constructor(private store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: "[User/API] Load Users" });
  }
}
