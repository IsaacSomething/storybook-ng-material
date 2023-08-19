import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [SBHeaderModule, MatProgressBarModule],
  template: `
    <sb-header title="Progress Bar" matLink="components/progress-bar/api" />

    <div class="mx-4">
      <mat-progress-bar [color]="color" [value]="value" [mode]="mode" />
    </div>
  `
})
export class ProgressBarModule {
  @Input() value!: number;
  @Input() color!: ThemePalette | 'default';
  @Input() mode!: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
