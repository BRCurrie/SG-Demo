import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from "../../models/user";
import * as UserActions from "../actions/user.actions";

export const usersFeatureKey = "users";

export interface State extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, action) =>
    adapter.addOne(action.user, state)
  ),
  on(UserActions.upsertUser, (state, action) =>
    adapter.upsertOne(action.user, state)
  ),
  on(UserActions.addUsers, (state, action) =>
    adapter.addMany(action.users, state)
  ),
  on(UserActions.upsertUsers, (state, action) =>
    adapter.upsertMany(action.users, state)
  ),
  on(UserActions.updateUser, (state, action) =>
    adapter.updateOne(action.user, state)
  ),
  on(UserActions.updateUsers, (state, action) =>
    adapter.updateMany(action.users, state)
  ),
  on(UserActions.deleteUser, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(UserActions.deleteUsers, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(UserActions.loadUsers, (state, { users }) => ({ ...state, prop: users })),
  on(UserActions.loadUsersSuccess, (state, action) =>
    adapter.setAll(action.users, state)
  ),
  on(UserActions.selectUser, (state, { userId }) => {
    return { ...state, id: userId };
  }),
  on(UserActions.loadUsersFail, (state, action) =>
    adapter.setAll(action.error, state)
  ),
  on(UserActions.clearUsers, (state) => adapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectUserIds = selectIds;

export const selectUserEntities = selectEntities;

export const selectAllUsers = selectAll;
