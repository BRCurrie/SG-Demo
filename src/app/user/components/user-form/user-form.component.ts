import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";

import { User } from "../../models/user";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Input()
  user: User;

  @Output() create = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  form = this.fb.group({
    name: ["", Validators.required],
    id: [],
    username: [],
    email: [],
    address: this.fb.group({
      street: [],
      suite: [],
      city: [],
      zipcode: [],
      geo: this.fb.group({
        lat: [],
        lng: [],
      }),
    }),
    phone: [],
    website: [],
    company: this.fb.group({
      name: [],
      catchPhrase: [],
      bs: [],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log("form submitted");
  }

  createUser(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updateUser(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.remove.emit({ ...this.user, ...value });
    }
  }

  removeUser(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.user, ...value });
  }

  ngOnInit(): void {
    this.form.setValue(this.user);
  }
}
