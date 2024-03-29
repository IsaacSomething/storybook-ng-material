import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FloatLabelType, MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, SBHeaderModule, MatIconModule],
  template: `
    <sb-header title="Form Field" matLink="components/form-field/api" />

    <div class="mx-5">
      <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel">
        <mat-label>{{ label }}</mat-label>
        <input matInput />
        <mat-icon *ngIf="icon" matSuffix>bolt</mat-icon>
        <mat-hint [align]="hintPosition">{{ hint }}</mat-hint>
      </mat-form-field>
    </div>
  `,
  styles: []
})
export class FormFieldModule {
  @Input() label!: string;
  @Input() hint!: string;
  @Input() hintPosition!: 'start' | 'end';
  @Input() icon!: boolean;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() floatLabel!: FloatLabelType;
}
