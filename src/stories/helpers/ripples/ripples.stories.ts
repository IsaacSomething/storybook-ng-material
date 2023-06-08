import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { RipplesModule } from './ripples.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<RipplesModule> = {
  color: {
    options: ['primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  centered: { control: { type: 'boolean' }, name: 'Disabled' },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  unbounded: { control: { type: 'boolean' }, name: 'Disabled' },
  radius: { control: { type: 'number' }, name: 'Radius' }
};

const args: Partial<RipplesModule> = {
  centered: false,
  disabled: false,
  radius: undefined,
  unbounded: false,
  color: 'default'
};

const meta: Meta<RipplesModule> = {
  title: 'Helpers/Ripples',
  component: RipplesModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
type Story = StoryObj<RipplesModule>;

export const Ripples: Story = {
  args
};
