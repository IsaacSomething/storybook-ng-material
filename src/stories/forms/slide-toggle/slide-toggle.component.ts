import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Slide Toggle" matLink="slide-toggle" /> `,
  styles: []
})
export class SlideToggleModule {}
