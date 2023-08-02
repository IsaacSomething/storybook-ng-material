import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTableModule, MatSortModule],
  styles: [
    `
      .with-styles .mat-column-position {
        width: 32px;
        border-right: 1px solid #ccc;
        padding-right: 24px;
        text-align: center;
      }
      .with-styles .mat-column-name {
        background: rgba(0, 0, 0, 0.02);
      }
      .with-styles .mat-column-weight {
        font-weight: 700;
      }
      .with-styles .mat-column-symbol {
        color: var(--mat-primary);
        text-align: center;
        width: 32px;
      }
    `
  ],
  template: `
    <sb-header title="Table" matLink="components/table/api" />

    <div class="mx-4">
      <table mat-table matSort [dataSource]="dataSource" class="mat-elevation-z1" [class.with-styles]="hasStyles">
        <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

        <!-- Position Column -->
        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name" sticky>
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="symbol">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Symbol</th>
          <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
        </ng-container>

        <!-- Disclaimer column -->
        <ng-container matColumnDef="disclaimer">
          <td mat-footer-cell *matFooterCellDef colspan="4" class="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quisquam alias, tenetur cumque aliquam fugit doloribus maiores
            eaque error minima commodi obcaecati esse? Quos odio, magnam eaque dolor eius accusantium!
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <tr mat-footer-row *matFooterRowDef="['disclaimer']"></tr>
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell" colspan="4">
            <h1 class="p-4">No data</h1>
          </td>
        </tr>
      </table>
    </div>
  `
})
export class TableModule implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @Input() hasStyles!: boolean;
  @Input() set clear(value: boolean) {
    if (value) {
      this.dataSource.data = [];
      return;
    }

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
