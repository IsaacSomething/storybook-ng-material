import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatProgressBarModule],
  template: `
    <sb-header title="Progress Bar" matLink="components/progress-bar/api" />

    <div class="mx-4">
      <mat-progress-bar [value]="34" mode="indeterminate"> </mat-progress-bar>
    </div>
  `
})
export class ProgressBarModule {
  /*  @Input() value!: number; 
  @Input() color!: ThemePalette | 'default';
  @Input() mode!: 'determinate' | 'indeterminate' | 'buffer' | 'query'; */
}
