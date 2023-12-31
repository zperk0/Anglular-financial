import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { WidgetTableComponent } from '@root/shared/components/widget-table/widget-table.component';
import { TableColumnFilterDataType } from '@root/shared/models/table/enum/table-column-filter-data-type.enum';
import { TableColumn } from '@root/shared/models/table/table-column.model';
import { TableConfiguration } from '@root/shared/models/table/table-configuration.model';
import { TableSettings } from '@root/shared/models/table/table-settings.model';
import { PolicyModel } from '../../model/policy.model';

@Component({
  selector: 'app-customer-policy',
  templateUrl: './customer-policy.component.html',
  styleUrls: ['./customer-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerPolicyComponent implements OnInit {
  payList: PolicyModel[] = [];
  @ViewChild(WidgetTableComponent)

  table: WidgetTableComponent<PolicyModel>;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.payList = [
      {
        id: 0,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
      {
        id: 1,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
      {
        id: 2,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
      {
        id: 3,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
      {
        id: 4,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
      {
        id: 5,
        no: 'MGW196389',
        type: 'Fire',
        ein: '017797229',
        name: 'Mohamad Al Srouji',
        currency: 'USD',
        premiums: 700.0,
        dueGrossdate: 700.0,
        dueNetdate: 490.0,
        agentcommission: 210.0,
        balance: '3,000.00',
        issueDate: '01/01/2020',
        inceptiondate: '01/01/2020',
        expirydate: '01/01/2020',
      },
    ];

    this.tableConfiguration.data = this.payList;
    this.tableConfiguration.dataCount = this.payList.length;
    console.log(this.tableConfiguration.data);
    this.cdr.detectChanges();
    this.table.refresh();
  }

  tableColumns: TableColumn[] = [
    {
      translationKey: 'Policy No',
      property: 'no',
      type: 'text',
      svgIcon: '',
      cssClasses: () => '',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: false,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Type',
      property: 'type',
      type: 'text',
      cssClasses: () => '',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Policy header EIN',
      property: 'ein',
      type: 'text',
      cssClasses: () => '',
      dataCssClasses: () => 'underline text-accent',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Holder Name',
      property: 'name',
      type: 'text',
      cssClasses: () => '',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Currency',
      property: 'currency',
      type: 'text',
      cssClasses: () => '',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Total Annual Premiums',
      property: 'premiums',
      type: 'number',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Premiums Due (Gross)',
      property: 'dueGrossdate',
      type: 'number',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Premiums Due (Net)',
      property: 'dueNetdate',
      type: 'number',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Agent Commissions',
      property: 'agentcommission',
      type: 'number',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Outstanding Balance',
      property: 'balance',
      type: 'text',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Issue Date',
      property: 'issueDate',
      type: 'text',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Inception Date',
      property: 'inceptiondate',
      type: 'text',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
    {
      translationKey: 'Expiry Date',
      property: 'expirydate',
      type: 'text',
      cssClasses: () => 'pr-2',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text,
      },
    },
  ];

  pageSize = 15;

  tableSettings = new TableSettings({
    actionsMode: 'inline',
    pageSize: this.pageSize,
    isLocalPaging: true,
    isRowSelectable: true,
    enableCustomizingColumns: true,
  });

  tableConfiguration: TableConfiguration<PolicyModel> = {
    tableRowsActionsList: [],
    columns: this.tableColumns,
    data: [],
    dataCount: 0,
    settings: this.tableSettings,
  };
}
