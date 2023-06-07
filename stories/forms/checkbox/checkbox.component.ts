import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'storybook-Checkbox',
  standalone: true,
  imports: [MatCheckboxModule, NgFor],
  template: `
    <div class="padding flex-column">
      <mat-checkbox
        *ngFor="let item of [1, 2, 3]"
        [disabled]="disabled"
        [color]="color"
        [labelPosition]="labelPosition"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
        class="margin-right"
      >
        {{ label + '-' + item }}
      </mat-checkbox>
    </div>
  `,
})
export default class Checkbox {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() labelPosition!: 'after' | 'before';
  @Input() disabled: boolean = false;
  @Input() indeterminate!: boolean;
}
