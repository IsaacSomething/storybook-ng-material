import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TooltipModule } from './tooltip.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<TooltipModule> = {
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  hideDelay: { control: { type: 'range', step: 500, min: 0, max: 5000 }, name: 'Hide delay' },
  position: { control: { type: 'select', options: ['left', 'right', 'above', 'below', 'before', 'after'] }, name: 'Position' }
};

const args: Partial<TooltipModule> = {
  disabled: false,
  hideDelay: 0,
  position: 'right'
};

const meta: Meta<TooltipModule> = {
  title: 'Components/Tooltip',
  component: TooltipModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
type Story = StoryObj<TooltipModule>;

export const Tooltip: Story = {
  args
};
