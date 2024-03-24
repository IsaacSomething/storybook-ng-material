import { CdkDrag, CdkDropList, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, CdkDropList, CdkDrag, CdkDragHandle],
  styles: [
    `
      .cursor-move {
        cursor: move;
      }

      .example-box {
        width: 200px;
        height: 200px;
        border: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #fff;
        border-radius: 4px;
        position: relative;
        z-index: 1;
        transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      }

      .example-box:active {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .example-handle {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ccc;
        cursor: move;
        width: 24px;
        height: 24px;
      }

      .example-boundary {
        width: 400px;
        height: 400px;
        max-width: 100%;
        border: dotted #ccc 2px;
      }
    `
  ],
  template: `
    <sb-header title="Drag & Drop" matLink="cdk/drag-drop/api" />
    <div [class.example-boundary]="boundary">
      <div class="example-box" cdkDrag [class.cursor-move]="!handle" cdkDragBoundary=".example-boundary">
        Drag me around

        <div *ngIf="handle" class="example-handle" cdkDragHandle>
          <svg width="24px" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </div>
      </div>
    </div>
  `
})
export class SbDragDropModule {
  @Input() handle!: boolean;
  @Input() boundary!: boolean;
}
