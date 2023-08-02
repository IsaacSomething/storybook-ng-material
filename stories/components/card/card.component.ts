import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SBHeaderModule } from '../../shared/sb-header';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatCardModule, MatButtonModule, MatProgressBarModule],
  template: `
    <sb-header title="Card" matLink="components/card/api" />

    <mat-card class="mx-4" style="width:400px" [appearance]="appearance">
      <mat-card-header *ngIf="title || subtitle">
        <mat-card-title-group>
          <img *ngIf="avatar" mat-card-avatar src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
          <mat-card-title *ngIf="title">title</mat-card-title>
          <mat-card-subtitle *ngIf="subtitle">subtitle</mat-card-subtitle>

          <ng-container *ngIf="media" [ngSwitch]="mediaSize">
            <img *ngSwitchCase="'xl'" mat-card-xl-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
            <img *ngSwitchCase="'lg'" mat-card-lg-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
            <img *ngSwitchCase="'md'" mat-card-md-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
            <img *ngSwitchCase="'sm'" mat-card-sm-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
          </ng-container>
        </mat-card-title-group>
      </mat-card-header>

      <img *ngIf="image" mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />

      <!-- Empty content for bottom spacing if display is just title || subtitle -->
      <mat-card-content></mat-card-content>

      <mat-card-content *ngIf="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos nostrum veritatis assumenda corrupti sequi ut molestiae
        nesciunt, quo, eius accusamus dolor illo esse quaerat culpa vel accusantium dolore aspernatur?
      </mat-card-content>

      <mat-card-actions *ngIf="actions" [align]="align">
        <button mat-button>[Lorem Ipsum]</button>
        <button mat-button>[Lorem Ipsum]</button>
      </mat-card-actions>

      <mat-card-footer *ngIf="footer">
        <mat-progress-bar mode="indeterminate" />
      </mat-card-footer>
    </mat-card>
  `,
  styles: []
})
export class CardModule {
  @Input() appearance!: 'outlined' | 'raised';
  @Input() title!: boolean;
  @Input() subtitle!: boolean;
  @Input() content!: boolean;
  @Input() actions!: boolean;
  @Input() avatar!: boolean;
  @Input() media!: boolean;
  @Input() mediaSize!: 'xl' | 'lg' | 'md' | 'sm';
  @Input() image!: boolean;
  @Input() footer!: boolean;
  @Input() align!: 'start' | 'end';
}
