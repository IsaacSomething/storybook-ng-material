import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Menu" matLink="menu" /> `,
  styles: []
})
export class SlideToggleModule {}
