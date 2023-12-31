import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-ratio',
  templateUrl: './profile-ratio.component.html',
  styleUrls: ['./profile-ratio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRatioComponent implements OnInit {
  @Input() label: string;
  @Input() ratio: string;
  @Input() percentile: string;

  constructor() { }

  ngOnInit(): void {
  }

}
