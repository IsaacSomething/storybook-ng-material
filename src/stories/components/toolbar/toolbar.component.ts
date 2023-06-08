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

    <div class="mx-5">
      <mat-toolbar [color]="color">
        <span>[Left]</span>
        <span class="flex-auto"></span>
        <span>[Right]</span>
      </mat-toolbar>
    </div>
  `,
  styles: []
})
export class ToolbarModule {
  @Input() color!: ThemePalette | 'default';
}
