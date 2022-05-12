import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@learning-nx/material';
import { RouterModule } from '@angular/router';
import { LayoutToolbarComponent } from './components/layout-toolbar/layout-toolbar.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent, LayoutToolbarComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
