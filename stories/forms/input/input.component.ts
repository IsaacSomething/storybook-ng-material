import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-input',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>
          {{ label }}
          <span *ngIf="complexLabel"> 🏄 <b>Complex</b> <i> label</i> </span>
        </mat-label>
        <span matPrefix>[&nbsp;] &nbsp;</span>
        <mat-icon matSuffix>data_array</mat-icon>
        <input
          #input
          [disabled]="disabled"
          matInput
          [placeholder]="placeholder"
        />

        <mat-error *ngIf="showError">[This is the error]</mat-error>

        <mat-hint *ngIf="showHint">[This is a hint]</mat-hint>
        <mat-hint *ngIf="showHint" align="end">
          [{{ input.value.length }} / 5]
        </mat-hint>
      </mat-form-field>
    </div>
  `,
})
export default class InputFormField {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() showError!: boolean;
  @Input() showHint!: boolean;
  @Input() complexLabel!: boolean;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
}
