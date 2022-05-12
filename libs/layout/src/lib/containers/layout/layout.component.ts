import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {LayoutDataset, User} from '@learning-nx/data-models';
import {AuthService} from '@learning-nx/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'learning-nx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  user$: Observable<User|null> = of(null);
  layoutData: LayoutDataset = {
    user$: this.user$
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.layoutData = {
      user$: this.user$
    };
  }

  logOut(e: string) {
    if (e === 'logout') {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    }
  }
}
