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

    <p class="text-sm">
      --mdc-linear-progress-active-indicator-color: var(--mat-primary-500); <br />
      --mdc-linear-progress-track-color: var(--mat-primary-500); <br />
      why are these colors the same??????
    </p>

    <br />
    <div class="mx-4">
      <mat-progress-bar [value]="value" />
    </div>
  `
})
export class ProgressBarModule {
  @Input() value!: number;
  @Input() color!: ThemePalette | 'default';
  @Input() mode!: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
