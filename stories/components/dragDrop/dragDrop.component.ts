import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'storybook-dragDrop',
  standalone: true,
  imports: [BrowserAnimationsModule, DragDropModule],
  styles: [
    `
      .box {
        display: block;
        height: 300px;
        width: 300px;
        border-radius: 4px;
      }
      .box:active {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }
    `,
  ],
  template: `
    <div class="box mat-elevation-z2 padding" cdkDrag>[Drag this box]</div>
  `,
})
export default class DragDrop {}
