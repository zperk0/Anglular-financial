import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { SharedModule } from '@root/shared/shared.module';
import { TableModule } from 'primeng/table';

import { SharedSystemSetupModule } from '../shared-system-setup/shared-system-setup.module';
import { AddUserRoleComponent } from './components/add-user-role/add-user-role.component';
import { UserPoliciesComponent } from './components/user-policies/user-policies.component';
import { UserRolesManagementComponent } from './components/user-roles-management/user-roles-management.component';
import { UserSecurityComponent } from './components/user-security/user-security.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: UserSecurityComponent
  },
  {
    path: ApplicationRoutes.AddUserRole,
    component: AddUserRoleComponent,
    outlet: 'sidenav',
  },
  {
    path: `${ApplicationRoutes.AddUserRole}/:id`,
    component: AddUserRoleComponent,
    outlet: 'sidenav',
  },
];

@NgModule({
  declarations: [
    UserSecurityComponent,
    UserRolesManagementComponent,
    UserPoliciesComponent,
    AddUserRoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    SharedSystemSetupModule,
    RouterModule.forChild(routes)
  ]
})
export class UserSecurityModule { }
