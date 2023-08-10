import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { SBHeaderModule } from '../../shared/sb-header';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, MatRadioModule, SBHeaderModule],
  template: `
    <sb-header title="Radio Button" matLink="components/radio/api" />

    <div class="m-4">
      <mat-radio-group [disabled]="disabled" [color]="color" [labelPosition]="labelPosition" class="flex" [class.flex-col]="stacked">
        <mat-radio-button value="1" checked>Option 1</mat-radio-button>
        <mat-radio-button value="2">Option 2</mat-radio-button>
        <mat-radio-button value="3">Option 3</mat-radio-button>
      </mat-radio-group>
    </div>
  `
})
export class RadioButtonModule {
  @Input() disabled!: boolean;
  @Input() stacked!: boolean;
  @Input() color!: ThemePalette;
  @Input() labelPosition!: 'before' | 'after';
}
