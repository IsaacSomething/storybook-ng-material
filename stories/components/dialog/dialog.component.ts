import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogTemplate } from './dialog-template.component';

@Component({
  selector: 'storybook-chips',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, BrowserAnimationsModule],
  template: `
    <div class="padding">
      <button mat-raised-button (click)="open()">[Open dialog]</button>
    </div>
  `,
})
export default class Chips {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() hasBackdrop!: boolean;
  @Input() disableClose!: boolean;

  constructor(public dialog: MatDialog) {}

  open() {
    this.dialog.open(DialogTemplate, {
      hasBackdrop: this.hasBackdrop,
      disableClose: this.disableClose,
    });
  }
}
