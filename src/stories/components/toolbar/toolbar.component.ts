import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatToolbarModule],
  template: `
    <sb-header title="Toolbar" matLink="components/toolbar/api" />
    <mat-toolbar>
      <span>FirstRow</span>
    </mat-toolbar>
  `,
  styles: []
})
export class ToolbarModule {
  @Input() color!: ThemePalette;
}
