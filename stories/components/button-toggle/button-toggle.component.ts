import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ThemePalette } from '@angular/material/core';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MatButtonToggleModule, SBHeaderModule],
  styles: [
    `
      .container {
        display: flex;
        padding: 3rem;
      }
    `
  ],
  template: `
    <sb-header title="Button" matLink="components/button/api" />

    <mat-button-toggle-group [disabled]="disabled" [vertical]="vertical" [appearance]="appearance" [multiple]="multiple">
      <mat-button-toggle value="bold">[{{ label }} A]</mat-button-toggle>
      <mat-button-toggle value="italic">[{{ label }} B]</mat-button-toggle>
      <mat-button-toggle value="underline">[{{ label }} C]</mat-button-toggle>
    </mat-button-toggle-group>
  `
})
export class ButtonToggleModule {
  @Input() label!: string;
  @Input() appearance!: 'legacy' | 'standard';
  @Input() disabled!: boolean;
  @Input() multiple!: boolean;
  @Input() vertical!: boolean;
}
