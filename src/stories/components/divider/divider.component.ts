import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatDividerModule, MatListModule],
  template: `
    <sb-header title="Divider" matLink="components/divider/api" />

    <mat-list>
      <mat-list-item>[Item 1]</mat-list-item>
      <mat-divider [vertical]="true" [inset]="inset"></mat-divider>
      <mat-list-item>[Item 2]</mat-list-item>
      <mat-divider [vertical]="true" [inset]="inset"></mat-divider>
      <mat-list-item>[Item 3]</mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class DividerModule {
  @Input() inset!: boolean;
}
