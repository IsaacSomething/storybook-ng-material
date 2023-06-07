import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'storybook-responsive',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatButtonModule, NgIf, MatIconModule],
  template: `
    <div class="padding">
      <p>
        Resize the panel to see the current screen size change. For better
        testing open in a new tab by clicking this icon
        <mat-icon class="small">open_in_new</mat-icon> in the top right hard
        corner of this panel
      </p>

      <button mat-stroked-button *ngIf="xSmall$ | async">
        Show at [xSmall]
      </button>
      <button mat-stroked-button *ngIf="small$ | async">Show at [small]</button>
      <button mat-stroked-button *ngIf="medium$ | async">
        Show at [medium]
      </button>
      <button mat-stroked-button *ngIf="large$ | async">Show at [large]</button>
      <button mat-stroked-button *ngIf="xLarge$ | async">
        Show at [xLarge]
      </button>

      <br />
      <br />
      <code>{{ size$ | async | json }} </code>
    </div>
  `,
})
export default class Responsive implements OnInit {
  @Input() currentScreenSize!: string;
  @Input() xSmall$!: Observable<boolean>;
  @Input() small$!: Observable<boolean>;
  @Input() medium$!: Observable<boolean>;
  @Input() large$!: Observable<boolean>;
  @Input() xLarge$!: Observable<boolean>;
  @Input() size$!: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.xSmall$ = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((_) => _.matches));

    this.small$ = this.breakpointObserver
      .observe([Breakpoints.Small])
      .pipe(map((_) => _.matches));

    this.medium$ = this.breakpointObserver
      .observe([Breakpoints.Medium])
      .pipe(map((_) => _.matches));

    this.large$ = this.breakpointObserver
      .observe([Breakpoints.Large])
      .pipe(map((_) => _.matches));

    this.xLarge$ = this.breakpointObserver
      .observe([Breakpoints.XLarge])
      .pipe(map((_) => _.matches));

    this.size$ = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
  }
}
