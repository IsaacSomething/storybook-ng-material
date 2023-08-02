import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';
import { DatepickerDropdownPositionX, DatepickerDropdownPositionY, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule],
  template: `
    <sb-header title="Date picker" matLink="date-picker" />

    <div class="mx-4" *ngIf="inline; else default">
      <mat-calendar class="h-auto w-80"></mat-calendar>
    </div>

    <ng-template #default>
      <div class="mt-96 mx-5 ml-10">
        <mat-form-field>
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" />
          <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker
            #picker
            [disabled]="disabled"
            [color]="color"
            [opened]="open"
            [touchUi]="touchUi"
            [xPosition]="xPosition"
            [yPosition]="yPosition"
            [startView]="startView"
          ></mat-datepicker>
        </mat-form-field>
      </div>
    </ng-template>
  `,
  styles: []
})
export class DatePickerModule {
  @Input() color: ThemePalette;
  @Input() open!: boolean;
  @Input() inline!: boolean;
  @Input() disabled!: boolean;
  @Input() startView!: 'month' | 'year' | 'multi-year';
  @Input() touchUi!: boolean;
  @Input() xPosition!: DatepickerDropdownPositionX;
  @Input() yPosition!: DatepickerDropdownPositionY;
}
