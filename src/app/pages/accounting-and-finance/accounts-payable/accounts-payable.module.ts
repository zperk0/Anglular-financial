import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { SecurityGuard } from '@root/shared/guards/security.guard';
import { Permission } from '@root/shared/models/enums/permissions.enum';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { SharedModule } from '@root/shared/shared.module';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { AccountsPayableComponent } from './components/accounts-payable/accounts-payable.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { PayableStatusComponent } from './components/payable-status/payable-status.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: AccountsPayableComponent,
    data: {
      permission: Permission.CanAccessAccountsPayable,
    },
    canActivate: [AutoLoginAllRoutesGuard, SecurityGuard],
  },
];

@NgModule({
  declarations: [AccountsPayableComponent, AddPaymentComponent, PayableStatusComponent],
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
export class AccountsPayableModule {}
