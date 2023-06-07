import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-badge',
  standalone: true,
  imports: [MatBadgeModule, MatIconModule, MatButtonModule],
  styles: [
    `
      .container {
        padding: 40px;
      }
    `,
  ],
  template: `
    <div class="container">
      <p>[Badge with icon]</p>
      <mat-icon
        [matBadge]="label"
        [matBadgeSize]="size"
        [matBadgeDisabled]="disabled"
        [matBadgeOverlap]="overlap"
        [matBadgePosition]="position"
        [matBadgeColor]="color"
        [matBadgeHidden]="hidden"
      >
        home
      </mat-icon>
      <br />
      <br />
      <br />
      <p>[Badge with icon button]</p>

      <button
        mat-icon-button
        [matBadge]="label"
        [matBadgeSize]="size"
        [matBadgeDisabled]="disabled"
        [matBadgePosition]="position"
        [matBadgeColor]="color"
        [matBadgeHidden]="hidden"
      >
        <mat-icon>home</mat-icon>
      </button>
      <br />
      <br />
      <br />
      <p>[Badge with button]</p>

      <button
        mat-stroked-button
        [matBadge]="label"
        [matBadgeSize]="size"
        [matBadgeDisabled]="disabled"
        [matBadgePosition]="position"
        [matBadgeColor]="color"
        [matBadgeHidden]="hidden"
      >
        [button]
      </button>
      <br />
      <br />
      <br />
      <p>[Badge with fab]</p>
      <button
        mat-fab
        [matBadge]="label"
        [matBadgeSize]="size"
        [matBadgeDisabled]="disabled"
        [matBadgePosition]="position"
        [matBadgeColor]="color"
        [matBadgeHidden]="hidden"
      >
        <mat-icon>home</mat-icon>
      </button>
    </div>
  `,
})
export default class Badge {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() disabled!: boolean;
  @Input() overlap!: boolean;
  @Input() label!: string;
  @Input() hidden!: boolean;
  @Input() position!:
    | 'above after'
    | 'above before'
    | 'below before'
    | 'below after'
    | 'before'
    | 'after'
    | 'above'
    | 'below';
  @Input() size!: 'small' | 'medium' | 'large';
}
