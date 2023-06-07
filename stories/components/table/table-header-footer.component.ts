import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { PeriodicElement, TableModel } from './model';

@Component({
  selector: 'storybook-table-header-footer',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  template: `
    <div class="padding-left-32 padding-right-32">
      <table
        mat-table
        [dataSource]="dataSource"
        class="mat-elevation-z1"
        [class.with-hover]="withHover"
        [class.striped]="striped"
        [class.header]="header"
        [class.text-transform]="textTransform"
      >
        <ng-container matColumnDef="header">
          <th mat-header-cell *matHeaderCellDef colspan="4">
            <h1 style="margin:0;font-weight:bold">[Header]</h1>
          </th>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="['header']"></tr>

        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.position }}</td>
          <td mat-footer-cell *matFooterCellDef></td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
          <td mat-footer-cell *matFooterCellDef style="text-align:right;">
            <span style="font-weight:bold">[Col footer]: &nbsp;</span>
          </td>
        </ng-container>

        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef>Weight</th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
          <td mat-footer-cell *matFooterCellDef>
            <span style="font-weight:bold">[Col footer]</span>
          </td>
        </ng-container>

        <ng-container matColumnDef="symbol">
          <th mat-header-cell *matHeaderCellDef>Symbol</th>
          <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
          <td mat-footer-cell *matFooterCellDef></td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>

        <!-- Disclaimer column -->
        <ng-container matColumnDef="disclaimer">
          <td mat-footer-cell *matFooterCellDef colspan="4">[Footer row 2]</td>
        </ng-container>
        <tr mat-footer-row *matFooterRowDef="['disclaimer']"></tr>

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
      <button mat-raised-button class="margin-right" (click)="addRow()">
        <mat-icon>add</mat-icon> Row
      </button>
      <button mat-raised-button class="margin-right" (click)="removeRow()">
        <mat-icon>remove</mat-icon> Row
      </button>

      <button mat-raised-button (click)="addBigData()">
        <mat-icon>add</mat-icon> Big data
      </button>
    </div>
  `,
})
export default class TableHeaderFooter {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @Input() displayedColumns!: string[];
  @Input() dataSource!: PeriodicElement[];
  @Input() withHover!: boolean;
  @Input() striped!: boolean;
  @Input() header!: boolean;
  @Input() textTransform!: boolean;

  addRow() {
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
  }
}
