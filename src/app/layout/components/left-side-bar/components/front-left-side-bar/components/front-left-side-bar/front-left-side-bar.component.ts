import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-front-left-side-bar',
  templateUrl: './front-left-side-bar.component.html',
  styleUrls: ['./front-left-side-bar.component.scss'],
  animations: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLeftSideBarComponent implements OnInit {

  @Output() flip: EventEmitter<any> =
    new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  flipCard(): void {
    this.flip.emit()
  }

}
