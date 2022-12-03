import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouteCrumbsList } from '@root/shared/models/bread-crumbs/router-crumbs-list.model';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  RSideBarOpen: boolean = false;
  LSideBarOpen: boolean = true;
  routeCrumbsList: RouteCrumbsList;
  isRTLDirection$ = this.layoutService.isRTLDirection$;
  rightSidenavMode$ = this.layoutService.rightSidenavMode$;
  isRightSidenavOpened$ = this.layoutService.isRightSidenavOpened$;
  showCrumb: boolean = false;
  mainContentClass: any = { 'h-full': true };
  ml: any = '384px';
  constructor(
    private layoutService: LayoutService,
    private router: Router,
  ) {
    this.updateBreadCrumbsRouter();
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--sideNavSize', '40vh');
    this.router.events.subscribe((val: NavigationEnd) => {
      if (val.url === '/dashboard') {
        this.showCrumb = false;
        this.mainContentClass = { 'h-full': true };
      } else {
        this.showCrumb = true;
        this.mainContentClass = { 'h-[95%]': true }
      }
    });
  }

  LSideBarToggle() {
    throw new Error('Method not implemented.');
  }

  updateBreadCrumbsRouter(): void {
    this.layoutService.breadcrumbsRoutes$.subscribe((routeCrumbsList: RouteCrumbsList) => {
      this.routeCrumbsList = routeCrumbsList;
    });
  }

  openAndClose(extended: any): void {
    console.log(extended);
    const size = extended ? '40vh' : '6vh';
    document.documentElement.style.setProperty('--sideNavSize', size);
    if (extended) {
      this.ml = '384px'
    } else {
      this.ml = '6vh'
    }
  }
}
