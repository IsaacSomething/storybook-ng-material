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
<!-- 
    <div class="mx-5">
      <mat-progress-bar [value]="34"> </mat-progress-bar>
    </div> -->

    <mat-progress-bar value="40"></mat-progress-bar>
  `
})
export class ProgressBarModule {
 /*  @Input() value!: number; 
  @Input() color!: ThemePalette | 'default';
  @Input() mode!: 'determinate' | 'indeterminate' | 'buffer' | 'query'; */
}
