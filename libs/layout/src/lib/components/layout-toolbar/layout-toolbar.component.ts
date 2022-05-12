import {Component, Input, OnInit} from '@angular/core';
import {LayoutDataset} from '@learning-nx/data-models';
import {of} from 'rxjs';

@Component({
  selector: 'learning-nx-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.scss'],
})
export class LayoutToolbarComponent implements OnInit {

  @Input() dataSet: LayoutDataset = {user$: of(null)};
  constructor() {}

  ngOnInit(): void {}
}
