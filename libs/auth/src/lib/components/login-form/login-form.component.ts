import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate } from '../../../../../data-models/src/lib/data-models.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'learning-nx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.submitForm.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }
}
