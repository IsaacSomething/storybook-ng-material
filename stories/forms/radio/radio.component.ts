import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'storybook-radio',
  standalone: true,
  imports: [MatRadioModule, CommonModule],
  template: `
    <div class="padding">
      <mat-radio-group
        [color]="color"
        [disabled]="disabled"
        [labelPosition]="labelPosition"
      >
        <mat-radio-button
          *ngFor="let item of [1, 1, 1]; let idx = index"
          [value]="label + '-' + (idx + 1)"
          class="padding-right"
        >
          {{ label + '-' + (idx + 1) }}
        </mat-radio-button>
      </mat-radio-group>
    </div>
  `,
})
export default class Radio {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() labelPosition!: 'after' | 'before';
  @Input() disabled!: boolean;
}
