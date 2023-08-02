import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTooltipModule, MatButtonModule],
  template: `
    <sb-header title="Tooltip" matLink="components/tooltip/api" />

    <div class="mx-4">
      <button
        mat-raised-button
        matTooltip="Lorem ipsum dolor"
        [matTooltipDisabled]="disabled"
        [matTooltipHideDelay]="hideDelay"
        [matTooltipPosition]="position"
      >
        [Hover]
      </button>
    </div>
  `,
  styles: []
})
export class TooltipModule {
  @Input() disabled!: boolean;
  @Input() hideDelay!: number;
  @Input() position!: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
}
