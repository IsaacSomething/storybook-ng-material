import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatProgressBarModule],
  template: `
    <sb-header title="Progress Bar" matLink="components/progress-bar/api" />

    <mat-progress-bar mode="determinate" [value]="value"> </mat-progress-bar>
  `,
  styles: []
})
export class ProgressBarModule {
  @Input() value!: number;
  @Input() buffer!: number;
  @Input() color!: ThemePalette;
  @Input() mode!: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
