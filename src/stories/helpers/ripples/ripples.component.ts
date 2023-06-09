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
    <sb-header title="Ripples" matLink="components/ripple/overview" />
    <div class="mx-4">
      <mat-card
        *ngIf="radius > 1; else noRadius"
        class="h-96 w-96 p-4"
        appearance="outlined"
        
        matRipple
        [matRippleCentered]="centered"
        [matRippleColor]="color ? 'rgba(241,136,31,0.1)' : 'rgba(0,0,0,0.1)'"
        [matRippleDisabled]="disabled"
        [matRippleRadius]="radius"
        [matRippleUnbounded]="unbounded"
      >
        [Set radius to 0 in order to view default ripple radius]<br />
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos quae. Quisquam, quos quae. Quisquam, quos quae.
      </mat-card>

      <ng-template #noRadius>
        <mat-card
          class="h-96 w-96 p-4"
          appearance="outlined"
          matRipple
          [matRippleCentered]="centered"
          matRippleColor="rgba(241,136,31,0.2)"
          [matRippleDisabled]="disabled"
          [matRippleUnbounded]="unbounded"
        >
          [Default ripple radius] <br />
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos quae. Quisquam, quos quae. Quisquam, quos quae.
        </mat-card>
      </ng-template>
    </div>
  `,
  styles: []
})
export class RipplesModule {
  @Input() centered!: boolean;
  @Input() disabled!: boolean;
  @Input() unbounded!: boolean;
  @Input() color!: boolean;
  @Input() radius!: number;
}
