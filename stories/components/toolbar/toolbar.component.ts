import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <sb-header title="Toolbar" matLink="components/toolbar/api" />

    <div class="mx-5">
      <mat-toolbar [color]="color">
        <mat-toolbar-row>
          <span>[Left]</span>

          <span class="flex-auto"></span>
          <button mat-icon-button><mat-icon>fingerprint</mat-icon></button>
          <button mat-icon-button><mat-icon>view_in_ar</mat-icon></button>
        </mat-toolbar-row>

        <mat-toolbar-row> [mat-toolbar-row] </mat-toolbar-row>
      </mat-toolbar>
    </div>
  `,
  styles: []
})
export class ToolbarModule {
  @Input() color!: ThemePalette | 'default';
}
