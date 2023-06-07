import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'storybook-button-toggle',
  imports: [MatButtonToggleModule],
  standalone: true,
  template: `
    <div class="padding">
      <mat-button-toggle-group color="primary">
        <mat-button-toggle value="left">[Left]</mat-button-toggle>
        <mat-button-toggle value="middle">[Middle]</mat-button-toggle>
        <mat-button-toggle value="right">[Right]</mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  `,
})
export default class ButtonToggle {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
