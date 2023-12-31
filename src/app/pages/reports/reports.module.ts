import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { ActiveReportsModule } from '@grapecity/activereports-angular';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { SharedModule } from '@root/shared/shared.module';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { ReportsDesignerComponent } from './components/reports-designer/reports-designer.component';
import { ReportsViewerComponent } from './components/reports-viewer/reports-viewer.component';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Route[] = [
    {
        path: ApplicationRoutes.Empty,
        redirectTo: ApplicationRoutes.ReportsViewer,
        pathMatch: 'full',
    },
    {
        path: ApplicationRoutes.ReportsViewer,
        component: ReportsViewerComponent,
        canLoad: [AutoLoginAllRoutesGuard]
    },

    {
        path: ApplicationRoutes.ReportsDesigner,
        component: ReportsDesignerComponent,
        canLoad: [AutoLoginAllRoutesGuard]
    },
];
@NgModule({
    declarations: [
        ReportsDesignerComponent,
        ReportsViewerComponent
    ],
    imports: [
        CommonModule,
        ActiveReportsModule,
        MatSidenavModule,
        MatIconModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ReportsModule { }
