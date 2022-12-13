import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '@root/shared/services/layout.service';

import { MultiSelectFormGroup } from '../../form-groups/multi-select-form-group.service';
import { SingleSelectFormGroup } from '../../form-groups/single-select-form-group.service';
import { Module } from '../../../shared/models/module.model';
import { AddClaim } from '../../models/add-claim.model';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserRoleComponent implements OnInit {

  fg: FormGroup;
  multiFormGroup: FormGroup;
  singleFormGroup: FormGroup;

  moduleList: Module[] = [
    {
      claimType: "system_setup",
      value: 'system_setup',
      clientClaims: [
        {
          id: 92,
          type: "system_setup",
          value: "CanAddSystemSetup"
        },
        {
          id: 91,
          type: "system_setup",
          value: "CanDeleteSystemSetup"
        },
        {
          id: 90,
          type: "system_setup",
          value: "CanEditSystemSetup"
        },
        {
          id: 89,
          type: "system_setup",
          value: "CanAccessSystemSetup"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "settings",
      value: 'settings',
      clientClaims: [
        {
          id: 88,
          type: "settings",
          value: "CanAddSettings"
        },
        {
          id: 87,
          type: "settings",
          value: "CanDeleteSettings"
        },
        {
          id: 86,
          type: "settings",
          value: "CanEditSettings"
        },
        {
          id: 85,
          type: "settings",
          value: "CanAccessSettings"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "entity_management",
      value: 'entity_management',
      clientClaims: [
        {
          id: 84,
          type: "entity_management",
          value: "CanAddEntityManagement"
        },
        {
          id: 83,
          type: "entity_management",
          value: "CanDeleteEntityManagement"
        },
        {
          id: 82,
          type: "entity_management",
          value: "CanEditEntityManagement"
        },
        {
          id: 81,
          type: "entity_management",
          value: "CanAccessEntityManagement"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "treaty_management",
      value: 'treaty_management',
      clientClaims: [
        {
          id: 80,
          type: "treaty_management",
          value: "CanAddTreatyManagement"
        },
        {
          id: 79,
          type: "treaty_management",
          value: "CanDeleteTreatyManagement"
        },
        {
          id: 78,
          type: "treaty_management",
          value: "CanEditTreatyManagement"
        },
        {
          id: 77,
          type: "treaty_management",
          value: "CanAccessTreatyManagement"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "product_management",
      value: 'product_management',
      clientClaims: [
        {
          id: 76,
          type: "product_management",
          value: "CanAddProductManagement"
        },
        {
          id: 75,
          type: "product_management",
          value: "CanDeleteProductManagement"
        },
        {
          id: 74,
          type: "product_management",
          value: "CanEditProductManagement"
        },
        {
          id: 73,
          type: "product_management",
          value: "CanAccessProductManagement"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "activity_log",
      value: 'activity_log',
      clientClaims: [
        {
          id: 72,
          type: "activity_log",
          value: "CanAddActivityLog"
        },
        {
          id: 71,
          type: "activity_log",
          value: "CanDeleteActivityLog"
        },
        {
          id: 70,
          type: "activity_log",
          value: "CanEditActivityLog"
        },
        {
          id: 69,
          type: "activity_log",
          value: "CanAccessActivityLog"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "correspondence_management",
      value: 'correspondence_management',
      clientClaims: [
        {
          id: 68,
          type: "correspondence_management",
          value: "CanAddCorrespondenceManagement"
        },
        {
          id: 67,
          type: "correspondence_management",
          value: "CanDeleteCorrespondenceManagement"
        },
        {
          id: 66,
          type: "correspondence_management",
          value: "CanEditCorrespondenceManagement"
        },
        {
          id: 65,
          type: "correspondence_management",
          value: "CanAccessCorrespondenceManagement"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "payroll",
      value: 'payroll',
      clientClaims: [
        {
          id: 64,
          type: "payroll",
          value: "CanAddPayroll"
        },
        {
          id: 63,
          type: "payroll",
          value: "CanDeletePayroll"
        },
        {
          id: 62,
          type: "payroll",
          value: "CanEditPayroll"
        },
        {
          id: 61,
          type: "payroll",
          value: "CanAccessPayroll"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "finance_reporting",
      value: 'finance_reporting',
      clientClaims: [
        {
          id: 60,
          type: "finance_reporting",
          value: "CanAddFinanceAndReporting"
        },
        {
          id: 59,
          type: "finance_reporting",
          value: "CanDeleteFinanceAndReporting"
        },
        {
          id: 58,
          type: "finance_reporting",
          value: "CanEditFinanceAndReporting"
        },
        {
          id: 57,
          type: "finance_reporting",
          value: "CanAccessFinanceAndReporting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "accounts_receivable",
      value: 'accounts_receivable',
      clientClaims: [
        {
          id: 56,
          type: "accounts_receivable",
          value: "CanAddAccountsReceivable"
        },
        {
          id: 55,
          type: "accounts_receivable",
          value: "CanDeleteAccountsReceivable"
        },
        {
          id: 54,
          type: "accounts_receivable",
          value: "CanEditAccountsReceivable"
        },
        {
          id: 53,
          type: "accounts_receivable",
          value: "CanAccessAccountsReceivable"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "accounts_payable",
      value: 'accounts_payable',
      clientClaims: [
        {
          id: 52,
          type: "accounts_payable",
          value: "CanAddAccountsPayable"
        },
        {
          id: 51,
          type: "accounts_payable",
          value: "CanDeleteAccountsPayable"
        },
        {
          id: 50,
          type: "accounts_payable",
          value: "CanEditAccountsPayable"
        },
        {
          id: 49,
          type: "accounts_payable",
          value: "CanAccessAccountsPayable"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "general_accounting",
      value: 'general_accounting',
      clientClaims: [
        {
          id: 48,
          type: "general_accounting",
          value: "CanAddGeneralAccounting"
        },
        {
          id: 47,
          type: "general_accounting",
          value: "CanDeleteGeneralAccounting"
        },
        {
          id: 46,
          type: "general_accounting",
          value: "CanEditGeneralAccounting"
        },
        {
          id: 45,
          type: "general_accounting",
          value: "CanAccessGeneralAccounting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "cashier",
      value: 'cashier',
      clientClaims: [
        {
          id: 44,
          type: "cashier",
          value: "CanAddCashier"
        },
        {
          id: 43,
          type: "cashier",
          value: "CanDeleteCashier"
        },
        {
          id: 42,
          type: "cashier",
          value: "CanEditCashier"
        },
        {
          id: 41,
          type: "cashier",
          value: "CanAccessCashier"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "life_insurance_underwriting",
      value: 'life_insurance_underwriting',
      clientClaims: [
        {
          id: 40,
          type: "life_insurance_underwriting",
          value: "CanAddLifeInsuranceUnderwriting"
        },
        {
          id: 39,
          type: "life_insurance_underwriting",
          value: "CanDeleteLifeInsuranceUnderwriting"
        },
        {
          id: 38,
          type: "life_insurance_underwriting",
          value: "CanEditLifeInsuranceUnderwriting"
        },
        {
          id: 37,
          type: "life_insurance_underwriting",
          value: "CanAccessLifeInsuranceUnderwriting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "medical_insurance_underwriting",
      value: 'medical_insurance_underwriting',
      clientClaims: [
        {
          id: 36,
          type: "medical_insurance_underwriting",
          value: "CanAddMedicalInsuranceUnderwriting"
        },
        {
          id: 35,
          type: "medical_insurance_underwriting",
          value: "CanDeleteMedicalInsuranceUnderwriting"
        },
        {
          id: 34,
          type: "medical_insurance_underwriting",
          value: "CanEditMedicalInsuranceUnderwriting"
        },
        {
          id: 33,
          type: "medical_insurance_underwriting",
          value: "CanAccessMedicalInsuranceUnderwriting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "motor_insurance_underwriting",
      value: 'motor_insurance_underwriting',
      clientClaims: [
        {
          id: 32,
          type: "motor_insurance_underwriting",
          value: "CanAddMotorInsuranceUnderwriting"
        },
        {
          id: 31,
          type: "motor_insurance_underwriting",
          value: "CanDeleteMotorInsuranceUnderwriting"
        },
        {
          id: 30,
          type: "motor_insurance_underwriting",
          value: "CanEditMotorInsuranceUnderwriting"
        },
        {
          id: 29,
          type: "motor_insurance_underwriting",
          value: "CanAccessMotorInsuranceUnderwriting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "general_insurance_underwriting",
      value: 'general_insurance_underwriting',
      clientClaims: [
        {
          id: 28,
          type: "general_insurance_underwriting",
          value: "CanAddGeneralInsuranceUnderwriting"
        },
        {
          id: 27,
          type: "general_insurance_underwriting",
          value: "CanDeleteGeneralInsuranceUnderwriting"
        },
        {
          id: 26,
          type: "general_insurance_underwriting",
          value: "CanEditGeneralInsuranceUnderwriting"
        },
        {
          id: 25,
          type: "general_insurance_underwriting",
          value: "CanAccessGeneralInsuranceUnderwriting"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "insurance_renewals",
      value: 'insurance_renewals',
      clientClaims: [
        {
          id: 24,
          type: "insurance_renewals",
          value: "CanAddInsuranceRenewals"
        },
        {
          id: 23,
          type: "insurance_renewals",
          value: "CanDeleteInsuranceRenewals"
        },
        {
          id: 22,
          type: "insurance_renewals",
          value: "CanEditInsuranceRenewals"
        },
        {
          id: 21,
          type: "insurance_renewals",
          value: "CanAccessInsuranceRenewals"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "customer_service",
      value: 'customer_service',
      clientClaims: [
        {
          id: 20,
          type: "customer_service",
          value: "CanAddCustomerService"
        },
        {
          id: 19,
          type: "customer_service",
          value: "CanDeleteCustomerService"
        },
        {
          id: 18,
          type: "customer_service",
          value: "CanEditCustomerService"
        },
        {
          id: 17,
          type: "customer_service",
          value: "CanAccessCustomerService"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "communication",
      value: 'communication',
      clientClaims: [
        {
          id: 16,
          type: "communication",
          value: "CanSendGroupMessages"
        },
        {
          id: 15,
          type: "communication",
          value: "CanSendDirectMessages"
        },
        {
          id: 14,
          type: "communication",
          value: "CanAccessGroupMessages"
        },
        {
          id: 13,
          type: "communication",
          value: "CanAccessDirectMessages"
        }
      ],
      totalCount: 4
    },
    {
      claimType: "dashboard",
      value: 'dashboard',
      clientClaims: [
        {
          id: 12,
          type: "dashboard",
          value: "CanAccessEmail"
        },
        {
          id: 11,
          type: "dashboard",
          value: "CanAccessCalander"
        },
        {
          id: 10,
          type: "dashboard",
          value: "CanAddStickyNote"
        },
        {
          id: 9,
          type: "dashboard",
          value: "CanViewStickyNote"
        },
        {
          id: 8,
          type: "dashboard",
          value: "CanViewAssignedTask"
        },
        {
          id: 7,
          type: "dashboard",
          value: "CanViewShortcutMenu"
        }
      ],
      totalCount: 6
    }
  ];
  moduleClaims: any = []
  addClaimsList: AddClaim[] = [];

  selectedOptions: any[] = [];
  claimSelectedOption: any[] = []
  selectedClaims = new Map<string, any>();
  chipsList: any[] = [];
  showClaims: boolean = false;

  constructor(
    private layoutService: LayoutService,
    private multiSelectFormGroup: MultiSelectFormGroup,
    private singleSelectFormGroup: SingleSelectFormGroup,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.multiFormGroup = this.multiSelectFormGroup.getFormGroup();
    this.singleFormGroup = this.singleSelectFormGroup.getFormGroup();
    this.multiFormGroup.get("options").valueChanges.subscribe(value => {
      this.chipsList = this.chipsList.concat(value.filter((item: any) => { return !Array.isArray(item) }));
      this.chipsList = this.chipsList.filter((item: any, index: number) => this.chipsList.indexOf(item) === index);
      console.log(this.chipsList);
    });

    this.singleFormGroup.get("option").valueChanges.subscribe(value => {
      this.moduleClaims = value.clientClaims;
    });

    this.activeRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
      }
      else {
      }
    });
  }


  onSave(): void {
    //Save Role and get RoleId

    //Get add claim list
    this.addClaimsList = this.chipsList.map((value: any) => {
      return { claimType: value.type, claimValue: value.value, roleId: '6a322faf-b16a-4b3f-93c0-aea5c66e5d90' }
    });
    console.log(this.addClaimsList);
    this.layoutService.closeRightSideNav();
  }

  onCancel(): void {
    this.layoutService.closeRightSideNav();
  }


  getChipLabel(chip: any) {
    return chip.type + ' - ' + chip.value
  }

  removeChip(chip: any) {
    const index = this.chipsList.indexOf(chip, 0)
    this.chipsList.splice(index, 1)
  }

}

