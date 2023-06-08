import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatSidenavModule, MatButtonModule],
  template: `
    <sb-header title="Sidenav" matLink="components/sidenav/api" />

    <mat-sidenav-container class="h-[400px] m-4" [hasBackdrop]="hasBackdrop">
      <mat-sidenav #sidenav [mode]="mode" [position]="position" opened class="p-4">Sidenav content</mat-sidenav>
      <mat-sidenav-content class="p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque necessitatibus impedit labore aut! Iure labore nihil optio
          facilis minus aliquid pariatur saepe nesciunt nemo perspiciatis. Nam, beatae consequatur! Est.
        </p>
        <button mat-raised-button (click)="sidenav.toggle()">Toggle</button>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: []
})
export class SidenavModule {
  @Input() position!: 'start' | 'end';
  @Input() mode!: 'over' | 'push' | 'side';
  @Input() hasBackdrop!: boolean;
}
