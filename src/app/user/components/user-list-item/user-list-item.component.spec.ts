import { Component } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import testUser from "src/app/testing/userObject";

import { User } from "../../models/user";

import { UserListItemComponent } from "./user-list-item.component";

@Component({
  template: ` <app-user-list-item [user]="user"></app-user-list-item> `,
})
class TestHostComponent {
  user: User = testUser;
}

describe("UserListItemComponent", () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let component: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListItemComponent, TestHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    component = fixture.nativeElement.querySelector(".user");
    fixture.detectChanges();
  });

  it("should create UserListItemComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should display the name of the User", () => {
    expect(component.textContent).toContain(testHost.user.name);
  });
});
