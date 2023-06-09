import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-Elevation',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatCardModule],
  template: `
    <sb-header title="Elevation" matLink="guide/elevation" />

    <div class="mx-4">
      <mat-card class="h-96 w-96 p-4 mat-elevation-z{{elevation}}">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos quae. Quisquam, quos quae. Quisquam, quos quae.
      </mat-card>
    </div>
  `,
  styles: []
})
export class ElevationModule {
  @Input() elevation!: number;
}
