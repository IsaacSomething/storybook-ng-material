import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTabsModule],
  template: ` <sb-header title="Textarea" matLink="textarea" /> `,
  styles: []
})
export class TextareaModule {}
