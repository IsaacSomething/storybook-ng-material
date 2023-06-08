import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, SBHeaderModule],
  template: ` <sb-header title="Radio Button" matLink="components/radio/api" /> `,
  styles: []
})
export class RadioButtonModule {}
