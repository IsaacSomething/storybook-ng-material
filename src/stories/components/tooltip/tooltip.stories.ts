import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TooltipModule } from './tooltip.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<TooltipModule> = {};

const args: Partial<TooltipModule> = {};

const meta: Meta<TooltipModule> = {
  title: 'Components/Tooltip',
  component: TooltipModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<TooltipModule>;

export const Tooltip: Story = {
  /* args */
};
