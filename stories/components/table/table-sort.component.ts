import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodicElement, TableModel } from './model';

@Component({
  selector: 'storybook-table-sort',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  template: `
    <div class="padding">
      <table
        mat-table
        matSort
        [dataSource]="dataSource"
        class="mat-elevation-z1"
        [class.with-hover]="withHover"
        [class.striped]="striped"
        [class.header]="header"
        [class.text-transform]="textTransform"
      >
        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th
            mat-header-cell
            *matHeaderCellDef
            mat-sort-header
            sortActionDescription="Sort by name"
          >
            Name
          </th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="weight">
          <th
            mat-header-cell
            *matHeaderCellDef
            mat-sort-header
            sortActionDescription="Sort by weight"
          >
            Weight
          </th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
        </ng-container>

        <ng-container matColumnDef="symbol">
          <th
            mat-header-cell
            *matHeaderCellDef
            mat-sort-header
            sortActionDescription="Sort by symbol"
          >
            Symbol
          </th>
          <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <!-- Row shown when there is no matching data. -->
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell padding" colspan="4">
            <div class="padding-top">
              <h1>There is no table data</h1>
            </div>
          </td>
        </tr>
      </table>

      <br />
      <!--  <button mat-raised-button class="margin-right" (click)="addRow()">
        <mat-icon>add</mat-icon> Row
      </button>
      <button mat-raised-button class="margin-right" (click)="removeRow()">
        <mat-icon>remove</mat-icon> Row
      </button>

      <button mat-raised-button (click)="addBigData()">
        <mat-icon>add</mat-icon> Big data
      </button> -->
    </div>
  `,
})
export default class TableSort implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @Input() displayedColumns!: string[];
  @Input() dataSource = new MatTableDataSource(TableModel.data);
  @Input() withHover!: boolean;
  @Input() striped!: boolean;
  @Input() header!: boolean;
  @Input() textTransform!: boolean;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /*  addRow() {
    const randomElementIndex = Math.floor(
      Math.random() * TableModel.bigData.length
    );
    this.dataSource.push(TableModel.bigData[randomElementIndex]);
    this.table.renderRows();
  }

  removeRow() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  addBigData() {
    this.dataSource = TableModel.bigData;
    this.table.renderRows();
  } */
}
