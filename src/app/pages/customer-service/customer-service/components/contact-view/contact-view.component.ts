import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
