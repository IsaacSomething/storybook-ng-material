import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, SBHeaderModule],
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
    <div [ngSwitch]="type" class="mx-4">
      <button *ngSwitchDefault mat-button [color]="color" [disabled]="disabled">{{ label }}</button>
      <button *ngSwitchCase="'raised'" mat-raised-button [color]="color" [disabled]="disabled">
        {{ label }}
      </button>
      <button *ngSwitchCase="'flat'" mat-flat-button [color]="color" [disabled]="disabled">
        {{ label }}
      </button>
      <button *ngSwitchCase="'stroked'" mat-stroked-button [color]="color" [disabled]="disabled">
        {{ label }}
      </button>
    </div>
  `
})
export class ButtonModule {
  @Input() label!: string;
  @Input() color!: ThemePalette | 'default';
  @Input() type!: 'default' | 'flat' | 'stroked' | 'raised';
  @Input() disabled!: boolean;
}
