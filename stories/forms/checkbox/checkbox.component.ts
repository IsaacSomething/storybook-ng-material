import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SBHeaderModule } from '../../shared/sb-header';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, SBHeaderModule],
  template: `
    <sb-header title="Checkbox" matLink="components/checkbox/api" />

    <div class="flex flex-col" [class.flex-col]="stacked">
      <mat-checkbox [color]="color" [indeterminate]="indeterminate" [labelPosition]="labelPosition" class="mr-2" checked>
        [Option 1]
      </mat-checkbox>
      <mat-checkbox [color]="color" [indeterminate]="indeterminate" [labelPosition]="labelPosition" class="mr-2">[Option 2]</mat-checkbox>
      <mat-checkbox [color]="color" [indeterminate]="indeterminate" [labelPosition]="labelPosition">[Option 3]</mat-checkbox>
    </div>
  `,
  styles: []
})
export class CheckboxModule {
  @Input() stacked!: boolean;
  @Input() indeterminate!: boolean;
  @Input() labelPosition!: 'before' | 'after';
  @Input() color!: ThemePalette | 'default';
}
