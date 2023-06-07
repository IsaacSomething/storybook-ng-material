import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="padding">
      <ng-container
        *ngTemplateOutlet="btnTemplate; context: { $implicit: 'small' }"
      >
      </ng-container>
      <br />
      <br />
      <ng-container *ngTemplateOutlet="btnTemplate"> </ng-container>
      <br />
      <br />
      <ng-container
        *ngTemplateOutlet="btnTemplate; context: { $implicit: 'large' }"
      >
      </ng-container>

      <ng-template #btnTemplate let-size>
        <button
          mat-button
          [class.mat-flat-button]="type === 'flat'"
          [class.mat-raised-button]="type === 'raised'"
          [class.mat-stroked-button]="type === 'stroked'"
          class="{{ size }} margin-right"
          [class.round]="round"
          [color]="color"
          [disabled]="disabled"
        >
          <mat-spinner *ngIf="loading"></mat-spinner> {{ label }}
        </button>

        <button
          mat-icon-button
          [class.mat-flat-button]="type === 'flat'"
          [class.mat-raised-button]="type === 'raised'"
          [class.mat-stroked-button]="type === 'stroked'"
          class="{{ size }}"
          [color]="color"
        >
          <mat-icon>home</mat-icon>
        </button>
      </ng-template>
    </div>
  `,
})
export default class Button {
  @Input() label!: string;
  @Input() type!: 'flat' | 'stroked' | 'raised' | 'default';
  @Input() color!: 'primary' | 'accent' | 'warn' | 'default';
  @Input() disabled!: boolean;
  @Input() loading!: boolean;
  @Input() round!: boolean;
  @Input() size!: any;
}
