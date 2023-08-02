import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatSlideToggleModule],
  template: `
    <sb-header title="Slide Toggle" matLink="slide-toggle" />

    <div class="mx-4">
      <mat-slide-toggle [color]="color" [labelPosition]="labelPosition" [checked]="checked">{{ label }}</mat-slide-toggle>
    </div>
  `,
  styles: []
})
export class SlideToggleModule {
  @Input() label!: string;
  @Input() checked!: boolean;
  @Input() color!: string;
  @Input() labelPosition!: 'before' | 'after';
}
