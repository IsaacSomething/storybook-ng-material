import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'storybook-toolbar',
  standalone: true,
  imports: [MatToolbarModule, CommonModule],
  styles: [],
  template: `
    <mat-toolbar [color]="color">
      <span> {{ leftLabel }} </span>

      <span class="spacer"></span>
      {{ rightLabel }}
    </mat-toolbar>
  `,
})
export default class Toolbar {
  @Input() color!: 'primary' | 'accent' | 'warn' | 'default';
  @Input() leftLabel!: string;
  @Input() rightLabel!: string;
}
