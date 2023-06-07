import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatRippleModule } from '@angular/material/core';
import { SBHeader } from '../../assets/sb-header';

@Component({
  selector: 'storybook-colors',
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatRippleModule, SBHeader],
  styleUrls: ['./colors.component.scss'],
  template: `
    <div class="padding">
      <sb-header [title]="color" clipboard>
        <h4 *ngIf="color === 'primary'">HEX: #3F51B5</h4>
        <h4 *ngIf="color === 'accent'">HEX: #D72828</h4>
        <h4 *ngIf="color === 'warn'">HEX: #5C5C5C</h4>
      </sb-header>

      <div
        class="block"
        matRipple
        cdkCopyToClipboard="var(--mat-{{ color }}-{{ hue }})"
        *ngFor="
          let hue of [
            '50',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
            'A100',
            'A200',
            'A400',
            'A700'
          ]
        "
        style="background-color:var(--mat-{{ color }}-{{ hue }})"
      >
        <h1 style="color:var(--mat-{{ color }}-contrast-{{ hue }})">
          {{ hue }}
        </h1>
        <span style="color:var(--mat-{{ color }}-contrast-{{ hue }})">
          var(--mat-{{ color }}-{{ hue }})
        </span>
      </div>
    </div>
  `,
})
export default class Colors {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
