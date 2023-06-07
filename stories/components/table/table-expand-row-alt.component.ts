import { NgFor } from '@angular/common';
import {
  Component,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodicElement, TableModel } from './model';

@Component({
  selector: 'storybook-table-expand-row-alt',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    BrowserAnimationsModule,
    MatExpansionModule,
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
        border: 2px solid var(--mat-divider);
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
      <p>
        Example uses mat-accordion instead of angular animations to show and
        hide the expanded panel.
      </p>
      <mat-accordion>
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
            <td mat-cell *matCellDef="let element">
              {{ element[column] }}
            </td>
          </ng-container>

          <ng-container matColumnDef="expandedDetail">
            <td
              mat-cell
              *matCellDef="let element"
              [attr.colspan]="columnsExpand.length"
              class="no-padding"
            >
              <mat-expansion-panel class="mat-elevation-z0">
                <div class="example-element-detail">
                  <div class="example-element-diagram">
                    <div class="example-element-symbol padding-bottom">
                      [{{ element.symbol }}]
                    </div>
                    <div class="example-element-name">{{ element.name }}</div>
                    <div class="example-element-weight">
                      {{ element.weight }}
                    </div>
                  </div>
                  <div class="example-element-description">
                    {{ element.description }}
                    <span class="example-element-description-attribution">
                      -- Wikipedia
                    </span>
                  </div>
                </div>
              </mat-expansion-panel>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="columnsExpand"></tr>
          <tr
            mat-row
            *matRowDef="let element; columns: columnsExpand"
            class="example-element-row"
            [class.example-expanded-row]="expandedElement === element"
            (click)="toggle(element)"
          ></tr>
          <tr
            mat-row
            *matRowDef="let row; columns: ['expandedDetail']"
            class="example-detail-row"
          ></tr>
        </table>
      </mat-accordion>
    </div>
  `,
})
export default class TableExpandRowAlt {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @ViewChildren(MatExpansionPanel)
  expansionPanel!: QueryList<MatExpansionPanel>;
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

  toggle(element: PeriodicElement) {
    const panelIdx = this.dataSource.findIndex((val) => val === element);
    this.expansionPanel.get(panelIdx)?.toggle();
  }
}
