import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatButtonModule, SBHeaderModule],
  template: `
    <sb-header title="Badge" matLink="components/badge/api" />

    <div class="mx-4">
      <button
        mat-raised-button
        [matBadgeHidden]="hidden"
        [matBadgeOverlap]="overlap"
        [matBadge]="label"
        [matBadgePosition]="position"
        [matBadgeColor]="color"
        [matBadgeSize]="size"
        [matBadgeDisabled]="disabled"
      >
        [Button]
      </button>
    </div>
  `
})
export class BadgeModule {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() disabled!: boolean;
  @Input() overlap!: boolean;
  @Input() label!: string;
  @Input() hidden!: boolean;
  @Input() position!: 'above after' | 'above before' | 'below before' | 'below after' | 'before' | 'after' | 'above' | 'below';
  @Input() size!: 'small' | 'medium' | 'large';
}
