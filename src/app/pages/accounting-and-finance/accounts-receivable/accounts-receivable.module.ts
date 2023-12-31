import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsReceivableComponent } from './components/accounts-receivable/accounts-receivable.component';
import { Route, RouterModule } from '@angular/router';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { Permission } from '@root/shared/models/enums/permissions.enum';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { SecurityGuard } from '@root/shared/guards/security.guard';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@root/shared/shared.module';
import { CustomerPolicyComponent } from './components/customer-policy/customer-policy.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: AccountsReceivableComponent,
    data: {
      permission: Permission.CanAccessAccountsPayable,
    },
    canActivate: [AutoLoginAllRoutesGuard, SecurityGuard],
  },
];

@NgModule({
  declarations: [AccountsReceivableComponent, CustomerPolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
})
export class AccountsReceivableModule {}
