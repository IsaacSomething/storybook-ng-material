import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Date picker" matLink="date-picker" /> `,
  styles: []
})
export class DatePickerModule {}
