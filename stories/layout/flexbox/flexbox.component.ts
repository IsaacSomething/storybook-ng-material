import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'storybook-flexbox',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  styleUrls: ['./flexbox.component.scss'],
  template: `
    <div
      [class.full-height]="fullHeight"
      class="container direction-{{ direction }} flex-wrap-{{
        flexWrap
      }} justify-content-{{ justifyContent }} align-items-{{
        alignItems
      }} align-content-{{ alignContent }}"
      [ngStyle]="{ 'row-gap.px': rowGap, 'column-gap.px': columnGap }"
    >
      <div class="mat-elevation-z1 box" *ngFor="let item of cards">
        <label>[item-{{ item }}]</label>

        <!--   <small>DEFAULTS</small><br />
        <code> display:flex; </code><br />
        <code> gap:{{ gap }}px; </code><br />

        <mat-divider class="margin-top margin-bottom"></mat-divider>
        <code *ngIf="direction"> flex-direction:{{ direction }} </code>
        <code *ngIf="flexWrap"> flex-wrap:{{ flexWrap }} </code>
        <code *ngIf="justifyContent">
          justify-content:{{ justifyContent }}
        </code> -->
      </div>
    </div>
  `,
})
export default class Flexbox {
  @Input() cardCount!: number;
  @Input() direction!:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | null;
  @Input() flexWrap!: 'nowrap' | 'wrap' | 'wrap-reverse' | null;
  @Input() justifyContent!:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | null;
  @Input() alignItems!:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first-baseline'
    | 'last-baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | null;
  @Input() alignContent!:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first-baseline'
    | 'last-baseline'
    | null;
  @Input() safe!: boolean;
  @Input() fullHeight!: boolean;
  @Input() rowGap!: number;
  @Input() columnGap!: number;

  @Input() get cards() {
    let cards = [];
    for (let i = 0; i < this.cardCount; i++) {
      cards.push(i);
    }
    return cards;
  }
}
