import { Component, Input } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, BrowserAnimationsModule],
  template: `
    <div class="padding">
      <button mat-stroked-button (click)="openBottomSheet()">
        [Open bottom sheet]
      </button>
    </div>
  `,
})
export default class BottomSheet {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() disabled!: boolean;

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<h1>Bottom sheet</h1>`,
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent) {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
