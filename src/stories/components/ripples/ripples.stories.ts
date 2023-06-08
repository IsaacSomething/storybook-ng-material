import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { RipplesModule } from './ripples.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<RipplesModule> = {
  yPosition: {
    options: ['above', 'below'],
    control: { type: 'radio' },
    name: 'Y position'
  },
  xPosition: {
    options: ['before', 'after'],
    control: { type: 'radio' },
    name: 'X position'
  },
  hasBackdrop: { control: { type: 'boolean' }, name: 'Has backdrop' },
  overlapTrigger: { control: { type: 'boolean' }, name: 'Overlap trigger' }
}; */

const args: Partial<RipplesModule> = {};

const meta: Meta<RipplesModule> = {
  title: 'Components/Ripples',
  component: RipplesModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<RipplesModule>;

export const Ripples: Story = {
  /* args */
};
