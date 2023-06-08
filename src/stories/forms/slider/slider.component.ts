import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTabsModule],
  template: ` <sb-header title="Slider" matLink="slider" /> `,
  styles: []
})
export class SliderModule {}
