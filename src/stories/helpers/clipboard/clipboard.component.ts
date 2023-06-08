import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTabsModule],
  template: ` <sb-header title="Clipboard" matLink="cdk/clipboard/api" /> `,
  styles: []
})
export class ClipboardModule {}
