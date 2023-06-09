import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, SBHeaderModule],
  template: `
    <sb-header title="Autocomplete" matLink="components/autocomplete/api" />

    <form class="mx-4">
      <mat-form-field>
        <mat-label>Number</mat-label>
        <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto" />
        <mat-autocomplete [autoActiveFirstOption]="autoActiveFirstOption" #auto="matAutocomplete">
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: []
})
export class AutocompleteModule {
  @Input() autoActiveFirstOption!: boolean;
  myControl = new FormControl('');
  options: string[] = ['Option one', 'Option two', 'Option three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
