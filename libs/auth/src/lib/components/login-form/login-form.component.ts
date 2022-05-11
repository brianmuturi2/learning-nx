import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate } from '../../../../../data-models/src/lib/data-models.module';

@Component({
  selector: 'learning-nx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Authenticate>();
  constructor() {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
