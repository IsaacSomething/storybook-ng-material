import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatInputModule, MatFormFieldModule],
  template: `
    <sb-header title="Textarea" matLink="textarea" />

    <mat-form-field>
      <mat-label>Textarea</mat-label>
      <textarea matInput [cdkTextareaAutosize]="autoResize" [cdkAutosizeMinRows]="minRows" [cdkAutosizeMaxRows]="maxRows"></textarea>
    </mat-form-field>
  `,
  styles: []
})
export class TextareaModule {
  @Input() minRows!: number;
  @Input() maxRows!: number;
  @Input() autoResize!: boolean;
}
