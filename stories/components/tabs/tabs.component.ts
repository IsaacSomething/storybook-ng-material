import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-Tabs',
  standalone: true,
  imports: [MatTabsModule, BrowserAnimationsModule],
  styles: [
    `
      h1 {
        font-weight: 900 !important;
      }
    `,
  ],
  template: `
    <mat-tab-group [color]="color" [attr.mat-align-tabs]="align">
      <mat-tab label="[First]">
        <div class="padding">
          <h1>[01]</h1>
          <p>
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur?
          </p>
        </div>
      </mat-tab>
      <mat-tab label="[Second]">
        <div class="padding">
          <h1>[02]</h1>
          <p>
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur?
          </p>
        </div>
      </mat-tab>
      <mat-tab label="[Third]">
        <div class="padding">
          <h1>[03]</h1>
          <p>
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur?
          </p>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
})
export default class Tabs {
  @Input() color!: 'primary' | 'accent' | 'warn' | 'default';
  @Input() align!: 'start' | 'center' | 'end';
  @Input() disabled!: boolean;
}
