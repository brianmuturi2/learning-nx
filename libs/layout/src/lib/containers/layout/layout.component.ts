import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '@learning-nx/data-models';
import {AuthService} from '@learning-nx/auth';

@Component({
  selector: 'learning-nx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User|null> = of(null);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }
}
