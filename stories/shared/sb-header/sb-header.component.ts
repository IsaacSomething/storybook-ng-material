import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'sb-header',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        padding: 0 16px;
      }

      h2 {
        font-size: 50px !important;
        font-weight: bold !important;
        margin-bottom: 6px !important;
        text-transform: capitalize;
        padding-bottom: 30px;
        padding-top: 16px;
      }

      mat-divider {
        margin-bottom: 16px;
      }

      a {
        margin-top: -20px;
        margin-bottom: 14px;
        display: block;
      }
    `
  ],
  template: `
    <h2>{{ title }}</h2>
    <a *ngIf="matLink" href="https://material.angular.io/{{ matLink }}" target="_blank"> Angular material documentation </a>

    <small class="pt-3 block" *ngIf="clipboard">CLICK TO COPY VALUE</small>
    <mat-divider></mat-divider>
  `
})
export class SBHeaderModule {
  @Input({ required: true }) title!: string;
  @Input() matLink!: string;
  @Input({ transform: booleanAttribute }) clipboard = false;
}
