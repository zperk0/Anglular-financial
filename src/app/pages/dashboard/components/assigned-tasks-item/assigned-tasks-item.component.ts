import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-tasks-item',
  templateUrl: './assigned-tasks-item.component.html',
  styleUrls: ['./assigned-tasks-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignedTasksItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
