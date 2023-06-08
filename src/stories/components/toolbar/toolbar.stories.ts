import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ToolbarModule } from './toolbar.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<ToolbarModule> = {
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

const args: Partial<ToolbarModule> = {};

const meta: Meta<ToolbarModule> = {
  title: 'Components/Toolbar',
  component: ToolbarModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<ToolbarModule>;

export const Toolbar: Story = {
  /* args */
};
