import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [SBHeaderModule, MatProgressSpinnerModule],
  template: `
    <sb-header title="Progress Spinner" matLink="components/progress-spinner/api" />

    <div class="m-4">
      <mat-spinner [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth" [color]="color" [mode]="mode" />
    </div>
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
