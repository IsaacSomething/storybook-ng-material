import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SBHeader } from '../../assets/sb-header';

@Component({
  selector: 'storybook-ripples',
  standalone: true,
  imports: [MatRippleModule, SBHeader],
  styles: [
    `
      .box {
        height: 300px;
        width: 300px;
        padding: 16px;
        border-radius: 4px;
        cursor: copy;
      }
    `,
  ],
  template: `
    <sb-header title="Ripples" matLink="ripple"></sb-header>

    <div class="padding">
      <div
        class="box mat-elevation-z1"
        matRipple
        [matRippleCentered]="centered"
        [matRippleUnbounded]="unbound"
        [matRippleRadius]="radius"
        [matRippleDisabled]="disabled"
        [matRippleColor]="
          color === 'default' ? 'default' : 'var(--mat-' + color + ')'
        "
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export default class Ripples {
  @Input() color!: 'default' | 'primary' | 'warn' | 'accent';
  @Input() disabled!: boolean;
  @Input() unbound!: boolean;
  @Input() centered!: boolean;
  @Input() radius!: number;
}
