import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
