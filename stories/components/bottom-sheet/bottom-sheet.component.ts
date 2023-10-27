import { Component, Input } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { SBHeaderModule } from 'stories/shared/sb-header';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, SBHeaderModule, MatButtonModule],
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
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, voluptatem officiis? Est nulla asperiores nisi officia pariatur
      consectetur culpa molestiae porro blanditiis, quasi inventore ex praesentium ab voluptate in atque.
    </p>

    <button mat-stroked-button (click)="dismiss()">[Dismiss]</button>
  `
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent) {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  dismiss() {
    this.bottomSheetRef.dismiss();
  }
}
