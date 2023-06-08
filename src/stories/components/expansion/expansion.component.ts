import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { SBHeaderModule } from '../../assets/sb-header';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatExpansionModule, MatButtonModule],
  template: ` <sb-header title="Expansion Panel" matLink="components/expansion/api" />

    <mat-accordion [multi]="multi" [displayMode]="displayMode">
      <mat-expansion-panel #panel1 (opened)="opened(panel1)" (closed)="closed(panel1)">
        <mat-expansion-panel-header>
          <mat-panel-title> Lorem Ipsum </mat-panel-title>
        </mat-expansion-panel-header>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </mat-expansion-panel>

      <mat-expansion-panel
        #panel2
        [hideToggle]="!toggle"
        [disabled]="disabled"
        [togglePosition]="togglePosition"
        [expanded]="expanded"
        (opened)="opened(panel2)"
        (closed)="closed(panel2)"
      >
        <mat-expansion-panel-header>
          <mat-panel-title> Lorem Ipsum </mat-panel-title>
          <mat-panel-description *ngIf="description"> lorem ipsum dolor sit amet, consectetur adipiscing </mat-panel-description>
        </mat-expansion-panel-header>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <mat-action-row>
          <button mat-flat-button color="primary" (click)="panel3.open()">Next [Action row]</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        #panel3
        [hideToggle]="!toggle"
        [disabled]="disabled"
        [togglePosition]="togglePosition"
        [expanded]="expanded"
        (opened)="opened(panel3)"
        (closed)="closed(panel3)"
      >
        <mat-expansion-panel-header>
          <mat-panel-title> Lorem Ipsum </mat-panel-title>
          <mat-panel-description *ngIf="description"> lorem ipsum dolor sit amet, consectetur adipiscing </mat-panel-description>
        </mat-expansion-panel-header>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </mat-expansion-panel>
    </mat-accordion>`,
  styles: []
})
export class ExpansionModule {
  @Input() toggle!: boolean;
  @Input() description!: boolean;
  @Input() disabled!: boolean;
  @Input() multi!: boolean;
  @Input() expanded!: boolean;
  @Input() displayMode!: 'default' | 'flat';
  @Input() togglePosition!: 'before' | 'after';

  opened(panel: MatExpansionPanel) {
    console.log(panel);
  }

  closed(panel: MatExpansionPanel) {
    console.log(panel);
  }
}
