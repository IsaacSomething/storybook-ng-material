import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatCardModule, MatButtonModule],
  template: `
    <sb-header title="Autocomplete" matLink="autocomplete" />

    <mat-card class="mx-4">
      <mat-card-header>
        <mat-card-title>title</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos nostrum veritatis assumenda corrupti sequi ut molestiae
        nesciunt, quo, eius accusamus dolor illo esse quaerat culpa vel accusantium dolore aspernatur?
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>Ok</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class CardModule {}
