import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatButtonModule, ClipboardModule],
  template: `
    <sb-header title="Clipboard" matLink="cdk/clipboard/api" />
    <div class="mx-4">
      <h3>{{ textCopy }}</h3>

      <button mat-raised-button [cdkCopyToClipboard]="textCopy" (click)="copied()">{{ text }}</button>
    </div>
  `,
  styles: []
})
export class ClipModule {
  text = 'Clip to copy text';
  textValue = 'Clip to copy text';
  textCopy = 'lorem ipsum dolor sit amet';

  copied() {
    this.text = 'Copied!';
    setTimeout(() => (this.text = this.textValue), 1000);
  }
}
