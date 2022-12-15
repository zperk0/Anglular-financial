import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mainRoutesList } from '@root/layout/statics/main-routes';

@Component({
  selector: 'app-back-left-side-bar',
  templateUrl: './back-left-side-bar.component.html',
  styleUrls: ['./back-left-side-bar.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      state('in', style({
        'max-height': '100%', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('2000ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('2000ms ease-in-out', style({
          'max-height': '100%'
        })),
        animate('2000ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ])
  ],
})
export class BackLeftSideBarComponent {

  @Output() flip: EventEmitter<any> = new EventEmitter<any>();
  @Output() toggleSidenavCollapsedEvent: EventEmitter<any> = new EventEmitter<boolean>();
  MainRouteItem = mainRoutesList;
  animationState: string = 'out';
  extended: boolean = true;
  path: string = '<';

  constructor(private router: Router) { }


  flipCard(): void {
    this.flip.emit();
    this.animationState = 'out';
  }

  navigate(url: string, sidenavLink: string = null) {
    this.router.navigate([url, {
      outlets: {
        sidenav: sidenavLink
      },
    }], { skipLocationChange: true });
  }

  toggleSidenav() {
    this.extended = !this.extended;
    this.path = this.extended ? '<' : '>';
    this.toggleSidenavCollapsedEvent.emit(this.extended);
  }
}
