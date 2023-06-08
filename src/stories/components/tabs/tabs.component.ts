import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatTabsModule],
  template: `
    <sb-header title="Tabs" matLink="components/tabs/api" />

    <mat-tab-group [color]="color" [animationDuration]="duration">
      <mat-tab label="First">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam reprehenderit aut placeat ipsum, error iusto amet optio praesentium
        debitis cum quibusdam! Nam numquam libero vel ab error atque minima laudantium?
      </mat-tab>
      <mat-tab label="Second">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam reprehenderit aut placeat ipsum, error iusto amet optio praesentium
        debitis cum quibusdam! Nam numquam libero vel ab error atque minima laudantium?
      </mat-tab>
      <mat-tab label="Third">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam reprehenderit aut placeat ipsum, error iusto amet optio praesentium
        debitis cum quibusdam! Nam numquam libero vel ab error atque minima laudantium?
      </mat-tab>
    </mat-tab-group>
  `,
  styles: []
})
export class TabsModule {
  @Input() color!: ThemePalette;
  @Input() backgroundColor!: ThemePalette;
  @Input() stretch!: boolean;
  @Input() duration!: number;
  @Input() align!: boolean;
  @Input() fitInkBarToContent!: boolean;
  @Input() headerPosition!: 'below' | 'above';
}
