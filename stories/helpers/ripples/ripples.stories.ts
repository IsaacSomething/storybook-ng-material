import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SbRipplesModule } from './ripples.component';

const argTypes: ArgTypes<SbRipplesModule> = {
  centered: { control: { type: 'boolean' }, name: 'Centered' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  unbounded: { control: { type: 'boolean' }, name: 'Unbounded' },
  color: { control: { type: 'boolean' }, name: 'Color (rgba)' },
  radius: { control: { type: 'range', max: 400, min: 0 }, name: 'Radius' }
};

const args: Partial<SbRipplesModule> = {
  centered: false,
  disabled: false,
  unbounded: false,
  color: false,
  radius: 0
};

const meta: Meta<SbRipplesModule> = {
  title: 'Helpers/Ripples',
  component: SbRipplesModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Ripples: StoryObj<SbRipplesModule> = { args };
