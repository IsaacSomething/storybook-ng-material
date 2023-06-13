import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, SBHeaderModule, MatSelectModule, MatFormFieldModule, MatInputModule],
  template: `
    <sb-header title="Select" matLink="components/select/api" />

    <div class="mx-4">
      <mat-form-field *ngIf="!multiple; else multi">
        <mat-label>{{ label }}</mat-label>
        <mat-select>
          <mat-option *ngIf="withReset">None</mat-option>
          <mat-option *ngFor="let item of items" [value]="item">
            {{ item }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <ng-template #multi>
        <mat-form-field>
          <mat-label>{{ label }}</mat-label>
          <mat-select multiple [disabled]="disabled">
            <mat-option *ngIf="withReset">None</mat-option>

            <mat-option *ngFor="let item of items" [value]="item">
              {{ item }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </ng-template>
    </div>
  `
})
export class SelectModule {
  @Input() label!: string;
  @Input() color!: ThemePalette;
  @Input() multiple!: boolean;
  @Input() disabled!: boolean;
  @Input() withReset!: boolean;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
}
