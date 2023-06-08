import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SBHeaderModule } from '../../assets/sb-header';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, SidenavModule],
  template: ` <sb-header title="Sidenav" matLink="components/sidenav/overview" /> `,
  styles: []
})
export class SidenavModule {}
