import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-Elevation',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Elevation" matLink="guide/elevation" /> `,
  styles: []
})
export class ElevationModule {}
