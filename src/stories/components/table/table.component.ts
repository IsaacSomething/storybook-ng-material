import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTableModule],
  template: ` <sb-header title="Table" matLink="components/table/api" /> `,
  styles: []
})
export class TableModule {}
