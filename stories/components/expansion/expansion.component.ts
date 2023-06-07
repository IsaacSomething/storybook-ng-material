import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-expansion',
  standalone: true,
  imports: [MatExpansionModule, BrowserAnimationsModule],
  template: `
    <div class="margin">
      <mat-accordion
        class="margin"
        [attr.dense]="dense"
        [displayMode]="mode"
        [hideToggle]="hideToggle"
      >
        <mat-expansion-panel class="mat-elevation-z{{ elevation }}">
          <mat-expansion-panel-header>
            <mat-panel-title>{{ title }}</mat-panel-title>
            <mat-panel-description>{{ description }}</mat-panel-description>
          </mat-expansion-panel-header>
          <p>
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur?
          </p>
        </mat-expansion-panel>
        <mat-expansion-panel class="mat-elevation-z{{ elevation }}">
          <mat-expansion-panel-header>
            <mat-panel-title>[Title]</mat-panel-title>
            <mat-panel-description>[Description]</mat-panel-description>
          </mat-expansion-panel-header>
          <p>
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur?
          </p>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
})
export default class Expansion {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() mode!: 'flat' | 'default';
  @Input() hideToggle!: boolean;
  @Input() dense!: boolean;
  @Input() title!: string;
  @Input() description!: string;
  @Input() elevation!: number;
}
