/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Clipboard } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomizeColumnsComponent } from '@root/pages/accounting-and-finance/accounts-payable/components/customize-columns/customize-columns.component';
import { Filter } from '@root/shared/models/table/filter.model';
import { PagingConfig } from '@root/shared/models/table/page-configuration.model';
import { TableColumn } from '@root/shared/models/table/table-column.model';
import { TableConfiguration } from '@root/shared/models/table/table-configuration.model';
import { SortItem } from '@root/shared/models/table/table-sort.model';
import { LayoutService } from '@root/shared/services/layout.service';
import { isSpinning$ } from '@root/shared/store/shared.store';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { BaseComponent } from '../base-component/base-component';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WidgetTableComponent<T> extends BaseComponent implements OnInit {
  @Input() tableConfiguration: TableConfiguration<T>;
  @Output() onPaging = new EventEmitter<PagingConfig>();
  @Output() onSlideToggle = new EventEmitter<{ value: boolean; item: T }>();
  @Output() onSort = new EventEmitter<SortItem>();
  @Output() onFilter = new EventEmitter<any>();
  @Output() onFilterCleared = new EventEmitter<any>();
  @ViewChild('dt', { static: true }) dataTable: Table;
  @Output() rowsSelected = new EventEmitter<T>();
  @Output() onRowSelection = new EventEmitter<T>();
  search: string;
  filterData: Filter[] = [];
  isSliderChangeConfirmed: boolean;
  pageSize = 50;
  currentPageIndex = 0;
  isSpinning$: Observable<boolean>;
  data: T[];
  isDesktop$ = this.layoutService.isDesktop$;
  isMobile$ = this.layoutService.isMobile$;
  selectedRow: T;

  constructor(
    private primengConfig: PrimeNGConfig,
    private clipboard: Clipboard,
    private layoutService: LayoutService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.pageSize = this.tableConfiguration.settings.pageSize;
    this.primengConfig.ripple = true;
    this.isSpinning$ = isSpinning$;
  }

  refresh(): void {
    this.data = [...this.tableConfiguration?.data];
    this.cdr.detectChanges();
  }

  copyText(text: any) {
    this.clipboard.copy(text);
  }

  containerClass(action: any, row: any[]): string {
    if (action.alwaysShow || row[action.showConditionProperty]) {
      return 'pb-2';
    } else {
      return 'pb-0';
    }
  }

  onLazyLoad(event: any) {
    if (
      event.first > 0 ||
      this.currentPageIndex > 0 ||
      event.rows !== this.pageSize
    ) {
      if (event.sortField) {
        this.onSort.emit({
          sortOrder: event.sortOrder,
          sortField: event.sortField,
        });
      } else if (event.rows !== this.pageSize) {
        this.onPaging.emit({ isNextPage: null, pageSize: event.rows });
      } else {
        if (!this.tableConfiguration.settings.isLocalPaging) {
          if (event.first / event.rows + 1 <= this.currentPageIndex) {
            // previous button clicked
            this.onPaging.emit({ isNextPage: false, pageSize: this.pageSize });
          } else {
            // next button clicked
            this.onPaging.emit({ isNextPage: true, pageSize: this.pageSize });
          }
        }
      }
      this.currentPageIndex = event.first / event.rows;
      this.pageSize = event.rows;
    }
  }

  toggleColumnVisibility(column: TableColumn, event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  clearFilters(table: Table) {
    table.clear();
    this.onFilterCleared.emit(true);
    this.filterData = [];
    this.dataTable.filters = {};
  }

  onSlideToggleChanged(item: T, checked: boolean) {
    this.onSlideToggle.emit({ value: checked, item });
  }

  onFilterEmitted(data: any) {
    let filter: any[] = [];
    Object.keys(data.filters).forEach((key) => {
      filter.push({ name: key, value: data.filters[key].value });
    });
    this.onFilter.emit(filter);
  }

  onRowsSelectedChanged() {
    this.rowsSelected.emit(this.selectedRow);
  }

  onRowSelect(event: any) {
    this.onRowSelection.emit(event.data);
  }

  openCustomizingColumns() {
    this.dialog.open(CustomizeColumnsComponent, {
      width: '800px',
      height: '350px',
      position: { right: '75px' },
    });
  }
}
