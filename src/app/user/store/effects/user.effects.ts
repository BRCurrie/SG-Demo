import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { UsersService } from "../../services/users.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UsersService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[User/API] Load Users"),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => ({
            type: "[User/API] Load Users Success",
            users: users,
          }))
        )
      )
    )
  );
}
