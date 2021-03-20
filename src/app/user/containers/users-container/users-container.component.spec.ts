import { Component } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import testUser from "src/app/testing/userObject";

import { User } from "../../models/user";

import { UsersContainerComponent } from "./users-container.component";

@Component({ selector: "app-user-list-item", template: "" })
class UserListItemStub {}

const testUsers: User[] = [testUser];

describe("UsersContainerComponent", () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  const getUserListItems = () =>
    fixture.debugElement.queryAll(By.css("user-list-item"));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersContainerComponent, UserListItemStub],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create UsersContainerComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should be created without any Users", () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(getUserListItems().length).toBe(0);
  });
});
