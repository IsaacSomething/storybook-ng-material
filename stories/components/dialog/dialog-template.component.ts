import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-storybook-template',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>[Dialog title]</h1>

    <div mat-dialog-content>[Dialog content]</div>

    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>[Dialog action focused]</button>
      <button mat-button mat-dialog-close cdkFocusInitial>
        [Dialog action 2]
      </button>
    </div>
  `,
})
export class DialogTemplate {
  constructor(
    public dialogRef: MatDialogRef<DialogTemplate>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
