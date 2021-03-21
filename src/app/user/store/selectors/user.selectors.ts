import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from "@ngrx/store";
import { selectRouteParams } from "src/app/core/store/selectors/router.selector";
import * as fromUser from "../reducers/user.reducer";

export interface State {
  users: fromUser.State;
}

export const selectUserState = createFeatureSelector<fromUser.State>("users");

// export const selectUserIds = createSelector(
//   selectUserState,
//   fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
// );

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
  (users, { userId }) => users[userId]
);

// export const selectUserTotal = createSelector(
//   selectUserState,
//   fromUser.selectUserTotal
// );
// export const selectCurrentUserId = createSelector(
//   selectUserState,
//   fromUser.getSelectedUserId
// );
