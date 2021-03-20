import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import testUser from "src/app/testing/userObject";

import { User } from "../models/user";

import { UsersService } from "./users.service";

let httpClientSpy: { get: jasmine.Spy };
let service: UsersService;

describe("UsersService", () => {
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  service = new UsersService(httpClientSpy as any);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(UsersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return expected users", () => {
    const expectedUsers: User[] = [testUser];
    httpClientSpy.get.and.returnValue(of(expectedUsers));

    service
      .getUsers()
      .subscribe(
        (users) => expect(users).toEqual(expectedUsers, "expected users"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });
});
