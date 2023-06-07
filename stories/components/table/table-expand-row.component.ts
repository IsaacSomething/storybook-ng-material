import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodicElement, TableModel } from './model';

@Component({
  selector: 'storybook-table-expand-row',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    BrowserAnimationsModule,
    MatRippleModule,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styles: [
    `
      .example-element-detail {
        overflow: hidden;
        display: flex;
      }
      tr.example-detail-row {
        height: 0;
      }
      .example-element-diagram {
        min-width: 80px;
        border: 2px solid black;
        padding: 8px;
        font-weight: lighter;
        margin: 8px 0;
        height: 104px;
      }

      .example-element-symbol {
        font-weight: bold;
        font-size: 40px;
        line-height: normal;
      }

      .example-element-description {
        padding: 16px;
      }

      .example-element-description-attribution {
        opacity: 0.5;
      }
    `,
  ],
  template: `
    <div class="padding">
      <table
        mat-table
        [dataSource]="dataSource"
        multiTemplateDataRows
        class="mat-elevation-z1"
        [class.with-hover]="withHover"
        [class.striped]="striped"
        [class.header]="header"
        [class.text-transform]="textTransform"
      >
        <!-- Columns -->
        <ng-container
          matColumnDef="{{ column }}"
          *ngFor="let column of displayedColumns"
        >
          <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
          <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
        </ng-container>

        <ng-container matColumnDef="expand">
          <th mat-header-cell *matHeaderCellDef>&nbsp;</th>
          <td mat-cell *matCellDef="let element">
            <button
              mat-icon-button
              aria-label="expand row"
              (click)="
                expandedElement = expandedElement === element ? null : element;
                $event.stopPropagation()
              "
            >
              <mat-icon *ngIf="expandedElement !== element"
                >keyboard_arrow_down</mat-icon
              >
              <mat-icon *ngIf="expandedElement === element"
                >keyboard_arrow_up</mat-icon
              >
            </button>
          </td>
        </ng-container>

        <ng-container matColumnDef="expandedDetail">
          <td
            mat-cell
            *matCellDef="let element"
            [attr.colspan]="columnsExpand.length"
          >
            <div
              class="example-element-detail"
              [@detailExpand]="
                element == expandedElement ? 'expanded' : 'collapsed'
              "
            >
              <div class="example-element-diagram">
                <div class="example-element-position">
                  {{ element.position }}
                </div>
                <div class="example-element-symbol">{{ element.symbol }}</div>
                <div class="example-element-name">{{ element.name }}</div>
                <div class="example-element-weight">{{ element.weight }}</div>
              </div>
              <div class="example-element-description">
                {{ element.description }}
                <span class="example-element-description-attribution">
                  -- Wikipedia
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columnsExpand"></tr>
        <tr
          mat-row
          *matRowDef="let element; columns: columnsExpand"
          class="example-element-row"
          [class.example-expanded-row]="expandedElement === element"
          (click)="
            expandedElement = expandedElement === element ? null : element
          "
        ></tr>
        <tr
          mat-row
          *matRowDef="let row; columns: ['expandedDetail']"
          class="example-detail-row"
        ></tr>
      </table>
    </div>
  `,
})
export default class TableExpandRow {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @Input() displayedColumns!: string[];
  @Input() dataSource!: PeriodicElement[];
  @Input() withHover!: boolean;
  @Input() striped!: boolean;
  @Input() header!: boolean;
  @Input() textTransform!: boolean;

  @Input() columnsExpand!: string[];
  @Input() expandedElement!: PeriodicElement | null;

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
