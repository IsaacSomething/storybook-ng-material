import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SBHeaderModule } from 'src/stories/assets/sb-header';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [MatButtonModule, SBHeaderModule, MatSnackBarModule],
  styles: [],
  template: `
    <sb-header title="Bottom sheet" matLink="bottom-sheet" />
    <button class="mx-4" mat-stroked-button (click)="openSnackbar()">[Open snackbar]</button>
  `
})
export class SnackbarModule {
  @Input() label!: string;
  @Input() message!: string;
  @Input() hasAction!: boolean;
  @Input() duration!: boolean;
  @Input() xPosition!: 'start' | 'center' | 'end' | 'left' | 'right';
  @Input() yPosition!: 'top' | 'bottom';

  constructor(private snackbar: MatSnackBar) {}

  openSnackbar() {
    this.snackbar.open(this.label, this.hasAction ? 'Action' : undefined, {
      duration: this.duration ? 2000 : undefined,
      verticalPosition: this.yPosition,
      horizontalPosition: this.xPosition
    });
  }
}
