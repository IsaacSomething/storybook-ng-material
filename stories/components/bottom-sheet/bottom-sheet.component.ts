import { Component, Input } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { SBHeaderModule } from 'stories/assets/sb-header';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, SBHeaderModule],
  styles: [],
  template: `
    <sb-header title="Bottom sheet" matLink="components/bottom-sheet/api" />
    <button class="mx-4" mat-stroked-button (click)="openBottomSheet()">[Open bottom sheet]</button>
  `
})
export class BottomSheetModule {
  @Input() hasBackdrop!: boolean;

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet, { hasBackdrop: this.hasBackdrop });
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<h1>Bottom sheet</h1>`
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent) {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
