import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
      }

      h2 {
        font-size: 50px !important;
        font-weight: bold !important;
        margin-bottom: 6px !important;
        text-transform: capitalize;
        padding-bottom: 30px;
        padding-top: 16px;
      }

      small {
        padding-top: 12px;
        display: block;
      }

      mat-divider {
        margin-bottom: 16px;
      }

      a {
        padding-bottom: 16px;
      }
    `
  ],
  template: `
    <div class="container">
      <h2>{{ title }}</h2>
      <a *ngIf="matLink" href="https://material.angular.io/{{ matLink }}" target="_blank"> Angular material documentation </a>

      <small *ngIf="clipboard">CLICK TO COPY VALUE</small>
      <mat-divider></mat-divider>
    </div>
  `
})
export class SBHeaderModule {
  @Input({ required: true }) title!: string;
  @Input() matLink!: string;
  @Input() set clipboard(value: BooleanInput) {
    this._clipboard = coerceBooleanProperty(value);
  }
  get clipboard() {
    return this._clipboard;
  }
  _clipboard = false;
}
