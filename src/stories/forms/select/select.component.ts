import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Select" matLink="components/select/api" /> `,
  styles: []
})
export class SelectModule {}
