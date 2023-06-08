import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatProgressSpinnerModule],
  template: `
    <sb-header title="Menu" matLink="menu" />
    <mat-spinner [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth" [color]="color" [mode]="mode"></mat-spinner>
  `,
  styles: []
})
export class ProgressSpinnerModule {
  @Input() value!: number;
  @Input() diameter!: number;
  @Input() strokeWidth!: number;
  @Input() color!: ThemePalette;
  @Input() mode!: 'determinate' | 'indeterminate';
}
