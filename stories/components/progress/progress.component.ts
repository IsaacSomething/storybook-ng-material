import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-progress',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatProgressBarModule, CommonModule],
  template: `
    <mat-progress-bar
      *ngIf="type === 'bar'"
      [mode]="mode"
      [value]="value"
      [color]="color"
    ></mat-progress-bar>
    <br />
    <mat-spinner
      class="margin"
      *ngIf="type === 'spinner'"
      [mode]="mode"
      [value]="value"
      [color]="color"
      [strokeWidth]="strokeWidth"
      [diameter]="diameter"
    ></mat-spinner>
  `,
})
export default class ProgressComponent {
  @Input() value = 50;
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() mode: 'determinate' | 'indeterminate' = 'indeterminate';
  @Input() type!: 'bar' | 'spinner';
  @Input() strokeWidth = 10;
  @Input() diameter = 100;
}
