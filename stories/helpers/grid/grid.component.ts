import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SBHeaderModule } from '../../shared/sb-header';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatGridListModule],
  template: `
    <sb-header title="Grid" matLink="components/grid-list/overview" />

    <mat-grid-list [cols]="cols" rowHeight="100px">
      <mat-grid-tile [colspan]="colOne" [rowspan]="rowOne" class="bg-orange-300"> One </mat-grid-tile>
      <mat-grid-tile [colspan]="colTwo" [rowspan]="rowTwo" class="bg-orange-400"> Two </mat-grid-tile>
      <mat-grid-tile [colspan]="colThree" [rowspan]="rowThree" class="bg-orange-500"> Three </mat-grid-tile>
      <mat-grid-tile [colspan]="colFour" [rowspan]="rowFour" class="bg-orange-600"> Four </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: []
})
export class SbGridModule implements OnInit {
  @Input() cols!: number;
  @Input() colOne!: number;
  @Input() rowOne!: number;
  @Input() colTwo!: number;
  @Input() rowTwo!: number;
  @Input() colThree!: number;
  @Input() rowThree!: number;
  @Input() colFour!: number;
  @Input() rowFour!: number;
  tiles!: Tile[];

  ngOnInit() {
    this.tiles = [
      { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
      { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
      { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
      { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
    ];
  }
}
