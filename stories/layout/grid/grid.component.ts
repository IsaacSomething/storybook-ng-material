import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SBHeader } from '../../assets/sb-header';

@Component({
  selector: 'storybook-grid',
  standalone: true,
  imports: [MatGridListModule, SBHeader],
  template: `
    <sb-header title="Grid" matLink="grid-list"></sb-header>

    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile class="bg-divider">
        <h1>[1]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-primary">
        <h1>[2]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-accent">
        <h1>[3]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-warn">
        <h1>[4]</h1>
      </mat-grid-tile>
    </mat-grid-list>
  `,
})
export default class Grid {}
