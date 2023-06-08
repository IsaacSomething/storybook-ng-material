import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTooltipModule],
  template: `
    <sb-header title="Tooltip" matLink="components/tooltip/api" />
  `,
  styles: []
})
export class TooltipModule {
  @Input() color!: ThemePalette;
}
