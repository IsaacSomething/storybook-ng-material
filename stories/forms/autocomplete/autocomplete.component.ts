import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-autocomplete',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  template: `
    <form class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>{{ label }}</mat-label>
        <input
          type="text"
          placeholder="Start typing"
          matInput
          [formControl]="control"
          [matAutocomplete]="auto"
        />
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option
            *ngFor="let option of filteredOptions | async"
            [value]="option"
          >
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
})
export default class Autocomplete implements OnInit {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';

  @Input() control!: FormControl;
  @Input() items!: string[];
  @Input() filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value || ''))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.items.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }
}
