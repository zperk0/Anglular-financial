import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  toggleRightSideBar() {
    throw new Error('Method not implemented.');
  }
  toggleLeftSideBar() {
    throw new Error('Method not implemented.');
  }
}
