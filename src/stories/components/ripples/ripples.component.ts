import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-ripples',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatCardModule, MatRippleModule],
  template: `
    <sb-header title="Menu" matLink="menu" />
    <mat-card
      matRipple
      [matRippleCentered]="centered"
      [matRippleColor]="color"
      [matRippleDisabled]="disabled"
      [matRippleRadius]="radius"
      [matRippleUnbounded]="unbounded"
    >
    </mat-card>
  `,
  styles: []
})
export class RipplesModule {
  @Input() centered!: boolean;
  @Input() disabled!: boolean;
  @Input() radius!: number;
  @Input() unbounded!: boolean;
  @Input() color!: string;
}
