import { ComponentPortal, DomPortal, Portal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [CommonModule, SBHeaderModule, MatButtonModule, PortalModule],
  template: `
    <sb-header title="Portal" matLink="cdk/portal/api" />

    <div class="mr">
      <h2>The portal outlet is below:</h2>
      <div class="example-portal-outlet">
        <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
      </div>
      <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>

      <button mat-raised-button class="mr-4" (click)="selectedPortal = componentPortal">Render component portal</button>
      <button mat-raised-button class="mr-4" (click)="selectedPortal = templatePortal">Render template portal</button>
      <button mat-raised-button (click)="selectedPortal = domPortal">Render DOM portal</button>
      <br />
      <br />
      <div #domPortalContent>Hello, this is a DOM portal</div>
    </div>
  `,
  styles: [
    `
      .example-portal-outlet {
        margin-bottom: 16px;
        padding: 16px;
        border: 1px dashed black;
        width: 250px;
        height: 250px;
      }
    `
  ]
})
export class SbPortalModule {
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<any>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal',
  standalone: true
})
export class ComponentPortalExample {}
