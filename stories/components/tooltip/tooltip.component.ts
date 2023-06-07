import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-tooltip',
  standalone: true,
  imports: [MatTooltipModule, MatButtonModule, MatIconModule],
  styles: [
    `
      div {
        padding: 50px 150px;
      }
    `,
  ],
  template: `
    <div>
      <button
        mat-stroked-button
        [matTooltip]="tooltipLabel"
        [matTooltipPosition]="position"
        [matTooltipClass]="color"
        [matTooltipDisabled]="disabled"
        [matTooltipShowDelay]="showDelay"
        [matTooltipHideDelay]="hideDelay"
      >
        [Hover here for tooltip]
      </button>
    </div>
  `,
})
export default class Tooltip {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() position: 'after' | 'before' | 'above' | 'below' | 'left' | 'right' =
    'below';
  @Input() disabled: boolean = false;
  @Input() tooltipLabel = 'Lorem Ipsum';
  @Input() showDelay!: number;
  @Input() hideDelay!: number;
}
