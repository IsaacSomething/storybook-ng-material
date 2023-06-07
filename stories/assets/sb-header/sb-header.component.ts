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
      .container {
        display: block;
        width: calc(100% - 32px);
        margin-left: 16px;
      }
      h2 {
        font-size: 50px !important;
        font-weight: bold !important;
        margin-bottom: 6px !important;
        text-transform: capitalize;
        padding-bottom: 16px;
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
    `,
  ],
  template: `
    <div class="container">
      <h2>{{ title }}</h2>
      <a
        href="https://material.angular.io/components/{{ matLink }}/api"
        target="_blank"
      >
        Angular material documentation
      </a>

      <small *ngIf="clipboard">CLICK TO COPY VALUE</small>
      <mat-divider></mat-divider>
    </div>
  `,
})
export class SBHeader {
  @Input() title!: string;
  @Input() matLink!: string;
  @Input() set clipboard(value: BooleanInput) {
    this._clipboard = coerceBooleanProperty(value);
  }
  get clipboard() {
    return this._clipboard;
  }
  _clipboard = false;
}
