import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule],
  styles: [
    `
      .container {
        padding: 200px 100px;
      }
    `,
  ],
  template: `
    <div class="container">
      <button mat-raised-button [matMenuTriggerFor]="menu">
        [Menu trigger]
      </button>

      <mat-menu
        #menu="matMenu"
        [hasBackdrop]="hasBackdrop"
        [overlapTrigger]="overlapTrigger"
        [xPosition]="xPosition"
        [yPosition]="yPosition"
      >
        <button mat-menu-item>[Item 1]</button>
        <button mat-menu-item>[Item 2]</button>
        <button mat-menu-item>[Item 2]</button>
      </mat-menu>
    </div>
  `,
})
export default class Menu {
  @Input() xPosition!: 'before' | 'after';
  @Input() yPosition!: 'above' | 'below';
  @Input() hasBackdrop!: boolean;
  @Input() overlapTrigger!: boolean;
}
