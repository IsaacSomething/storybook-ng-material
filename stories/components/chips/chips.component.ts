import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'storybook-chips',
  standalone: true,
  imports: [MatChipsModule],
  template: `
    <div class="padding">
      <mat-chip-list>
        <mat-chip>[Chip default]</mat-chip>
        <mat-chip selected>[Chip default selected]</mat-chip>
        <mat-chip [color]="color">[Chip with color no selected]</mat-chip>
        <mat-chip [color]="color" selected>[Chip with color selected]</mat-chip>
      </mat-chip-list>
    </div>
  `,
})
export default class Chips {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
