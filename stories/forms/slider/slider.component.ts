import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatSliderModule],
  template: `
    <sb-header title="Slider" matLink="slider" />
    <div class="mx-4">
      <mat-slider *ngIf="!range; else rangeSlider" class="w-96" [color]="color" [discrete]="discrete" [showTickMarks]="showTickMarks">
        <input matSliderThumb />
      </mat-slider>

      <ng-template #rangeSlider>
        <mat-slider class="w-96" [color]="color" [discrete]="discrete" [showTickMarks]="showTickMarks">
          <input value="40" matSliderStartThumb />
          <input value="70" matSliderEndThumb />
        </mat-slider>
      </ng-template>
    </div>
  `,
  styles: []
})
export class SliderModule {
  @Input() color!: string;
  @Input() discrete!: boolean;
  @Input() showTickMarks!: boolean;
  @Input() range!: boolean;
}
