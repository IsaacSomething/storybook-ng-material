import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-card-drawer',
  standalone: true,
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  template: `
    <div class="padding">
      <mat-card [attr.color]="color" class="drawer">
        <mat-drawer-container #drawer class="bg-card">
          <mat-drawer
            mode="over"
            class="bg-divider padding width-{{ drawerSize }} mat-elevation-z0"
          >
            <button mat-button (click)="drawer.close()">[Close drawer]</button>
          </mat-drawer>

          <mat-drawer-content>
            <mat-card-header>
              <img
                mat-card-avatar
                src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              />
              <mat-card-title (click)="drawer.open()" class="pointer">
                [Open]
              </mat-card-title>
              <mat-card-subtitle>Click [Open] to open drawer</mat-card-subtitle>
            </mat-card-header>

            <mat-card-content class="margin-top">
              Eligendi, provident dolores mollitia inventore facilis harum
              dolore nam in ut! Eveniet reiciendis, laudantium excepturi velit
              cum totam quo expedita aspernatur tenetur?
            </mat-card-content>

            <mat-card-actions>
              <button mat-button>Actions</button>
            </mat-card-actions>

            <mat-card-footer class="padding-horizontal padding-bottom">
              <small> Footer | Eligendi, provident dolores mollitia </small>
            </mat-card-footer>
          </mat-drawer-content>
        </mat-drawer-container>
      </mat-card>
    </div>
  `,
})
export default class CardDrawer implements OnChanges {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() drawerSize = 50;

  ngOnChanges(changes: SimpleChanges): void {}
}
