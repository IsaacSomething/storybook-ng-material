import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  template: ` <sb-header title="Grid" matLink="components/grid-list/overview" /> `,
  styles: []
})
export class GridModule {}
