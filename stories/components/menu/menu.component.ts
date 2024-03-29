import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatMenuModule, MatButtonModule],
  template: `
    <sb-header title="Menu" matLink="components/menu/api" />

    <div class="mx-5">
      <button mat-button [matMenuTriggerFor]="menu">[Menu]</button>
      <mat-menu
        #menu="matMenu"
        [yPosition]="yPosition"
        [xPosition]="xPosition"
        [hasBackdrop]="hasBackdrop"
        [overlapTrigger]="overlapTrigger"
      >
        <button mat-menu-item>Level 1a</button>
        <button mat-menu-item>Level 2b</button>
        <button mat-menu-item [matMenuTriggerFor]="level2">Multi level</button>
      </mat-menu>

      <mat-menu
        #level2="matMenu"
        [yPosition]="yPosition"
        [xPosition]="xPosition"
        [hasBackdrop]="hasBackdrop"
        [overlapTrigger]="overlapTrigger"
      >
        <button mat-menu-item>Level 2a</button>
        <button mat-menu-item>Level 2b</button>
        <button mat-menu-item [matMenuTriggerFor]="level3">Level 2c</button>
      </mat-menu>

      <mat-menu
        #level3="matMenu"
        [yPosition]="yPosition"
        [xPosition]="xPosition"
        [hasBackdrop]="hasBackdrop"
        [overlapTrigger]="overlapTrigger"
      >
        <button mat-menu-item>Level 3a</button>
        <button mat-menu-item>Level 3b</button>
        <button mat-menu-item>Level 3c</button>
      </mat-menu>
    </div>
  `,
  styles: []
})
export class MenuModule {
  @Input() yPosition!: 'above' | 'below';
  @Input() xPosition!: 'before' | 'after';
  @Input() hasBackdrop!: boolean;
  @Input() overlapTrigger!: boolean;
}
