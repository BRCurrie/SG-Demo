import { Component, Input } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { UsersContainerComponent } from "./users-container.component";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "../../store/reducers/user.reducer";

@Component({ selector: "app-user-list-item", template: "" })
class UserListItemStub {
  @Input()
  user: any;
}

const intialState: any = {
  users: {
    ids: [1],
    entities: {
      "1": {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    },
  },
};

describe("UsersContainerComponent", () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          users: userReducer,
        }),
      ],
      declarations: [UsersContainerComponent, UserListItemStub],
      providers: [provideMockStore({ initialState: intialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create UsersContainerComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should display users", () => {
    const usersList = fixture.nativeElement.querySelectorAll(
      "app-user-list-item"
    );
    expect(usersList.length).toBe(1, "should display 1 user");
  });
});
