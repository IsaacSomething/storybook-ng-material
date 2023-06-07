import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-card',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  standalone: true,
  template: `
    <div class="padding">
      <mat-card [attr.color]="color">
        <img
          mat-card-image
          *ngIf="image"
          src="https://cdn.pixabay.com/photo/2018/07/09/16/59/clouds-3526558_960_720.jpg"
        />

        <mat-card-header>
          <img
            mat-card-avatar
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          />
          <mat-card-title>Lorem ipsum</mat-card-title>
          <mat-card-subtitle>Dolor sit amet consectetur</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content class="margin-top">
          Eligendi, provident dolores mollitia inventore facilis harum dolore
          nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
          quo expedita aspernatur tenetur?
        </mat-card-content>

        <mat-card-actions>
          <button mat-button>Actions</button>
        </mat-card-actions>

        <mat-card-footer class="padding-horizontal padding-bottom">
          <small> Footer | Eligendi, provident dolores mollitia </small>
        </mat-card-footer>
      </mat-card>
    </div>
  `,
})
export default class Card {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() image = false;
}
