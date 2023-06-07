import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-select',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>{{ label }}</mat-label>

        <mat-select [disabled]="disabled">
          <mat-option
            *ngFor="let item of [1, 2, 3]; let idx = index"
            [value]="item"
          >
            {{ 'item-' + (idx + 1) }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
})
export default class Select {
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() appearance!: 'standard' | 'legacy' | 'fill' | 'outline';
}
