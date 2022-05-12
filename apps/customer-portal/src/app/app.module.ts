import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AuthModule, authRoutes } from '@learning-nx/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/angular';
import {LayoutModule} from '@learning-nx/layout';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //NxModule.forRoot(),
    RouterModule.forRoot([{path: 'auth', children: authRoutes}], { initialNavigation: 'enabledBlocking' }),
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
