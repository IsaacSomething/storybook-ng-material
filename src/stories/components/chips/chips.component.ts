import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatChipsModule, MatButtonModule, MatIconModule],
  template: `
    <sb-header title="Chips" matLink="components/chips/api" />

    <mat-chip-listbox class="mx-4" [hideSingleSelectionIndicator]="hideSingle" [multiple]="multiple" [selectable]="selectable">
      <mat-chip-option>Default</mat-chip-option>
      <mat-chip-option>
        <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu" /> With Avatar
      </mat-chip-option>
      <mat-chip-option> <mat-icon matChipTrailingIcon>bolt</mat-icon>With trailing icon </mat-chip-option>
      <mat-chip-option>Highlighted</mat-chip-option>
      <mat-chip-option [color]="color" selected>Selected</mat-chip-option>
      <mat-chip-option [highlighted]="highlighted">Highlighted</mat-chip-option>
    </mat-chip-listbox>
  `,
  styles: []
})
export class ChipsModule {
  @Input() color!: ThemePalette | 'default';
  @Input() hideSingle!: boolean;
  @Input() multiple!: boolean;
  @Input() selectable!: boolean;
  @Input() highlighted!: boolean;
}
