import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { Authenticate } from './authenticate';
export { User } from './user';
export { LayoutDataset } from './layout-dataset'

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
