import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [NgFor, NgIf, SBHeaderModule, MatDividerModule, MatListModule],
  template: `
    <sb-header title="Divider" matLink="components/divider/api" />

    <div class="m-4" *ngIf="vertical; else default">
      <div class="flex">
        <div *ngFor="let i of [1, 2, 3]; let idx = index; let last = last" class="flex">
          <p>
            <label>[Item {{ idx + 1 }}]</label> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero assumenda rerum ullam nemo voluptates
          </p>
          <mat-divider *ngIf="!last" class="mx-4" [inset]="inset" [vertical]="vertical"></mat-divider>
        </div>
      </div>
    </div>

    <ng-template #default>
      <mat-list>
        <mat-list-item>[Item 1]</mat-list-item>
        <mat-divider [inset]="inset" [vertical]="vertical"></mat-divider>
        <mat-list-item>[Item 2]</mat-list-item>
        <mat-divider [inset]="inset" [vertical]="vertical"></mat-divider>
        <mat-list-item>[Item 3]</mat-list-item>
      </mat-list>
    </ng-template>
  `,
  styles: []
})
export class DividerModule {
  @Input() inset!: boolean;
  @Input() vertical!: boolean;
}
