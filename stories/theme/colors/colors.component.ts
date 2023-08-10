import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';
import { MatRippleModule, ThemePalette } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, ClipboardModule, MatRippleModule],
  styleUrls: ['./colors.component.scss'],
  template: `
    <sb-header title="Autocomplete" matLink="autocomplete" />

    <div class="mx-4">
      <div
        class="block"
        matRipple
        cdkCopyToClipboard="var(--mat-{{ color }}-{{ hue }})"
        *ngFor="let hue of ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700']"
        style="background-color:var(--mat-{{ color }}-{{ hue }})"
      >
        <h1 style="color:var(--mat-{{ color }}-contrast-{{ hue }})">{{ hue }}</h1>
        <small style="color:var(--mat-{{ color }}-contrast-{{ hue }})"> var(--mat-{{ color }}-{{ hue }}) </small>
      </div>
    </div>
  `,
  styles: []
})
export class ColorsModule {
  @Input() color!: ThemePalette;
}
