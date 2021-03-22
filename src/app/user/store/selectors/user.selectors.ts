import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from "@ngrx/store";
import { filter } from "rxjs/operators";
import { selectRouteParams } from "src/app/core/store/selectors/router.selector";

import { User } from "../../models/user";
import * as fromUser from "../reducers/user.reducer";

export interface State {
  users: fromUser.State;
}

export const selectUserState = createFeatureSelector<fromUser.State>("users");

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);

export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);

export const selectUser = createSelector(
  fromUser.selectUserEntities,
  selectRouteParams,
  (user, { userId }): User => {
    // user is undefined, and I cannot figure out why
    console.log(user);
    return user[userId];
  }
);

// export const selectUserTotal = createSelector(
//   selectUserState,
//   fromUser.selectUserTotal
// );
// export const selectCurrentUserId = createSelector(
//   selectUserState,
//   fromUser.getSelectedUserId
// );
