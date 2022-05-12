import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LayoutDataset} from '@learning-nx/data-models';
import {of} from 'rxjs';

@Component({
  selector: 'learning-nx-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.scss'],
})
export class LayoutToolbarComponent implements OnInit {

  @Input() dataSet: LayoutDataset = {user$: of(null)};
  @Output() logOutEvent: EventEmitter<string> = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {}

  logOut() {
    this.logOutEvent.emit('logout');
  }
}
