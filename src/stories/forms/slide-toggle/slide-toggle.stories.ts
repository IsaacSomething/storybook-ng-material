import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SlideToggleModule } from './slide-toggle.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SlideToggleModule> = {};

const args: Partial<SlideToggleModule> = {};

const meta: Meta<SlideToggleModule> = {
  title: 'Forms/Slide Toggle',
  component: SlideToggleModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<SlideToggleModule>;

export const SlideToggle: Story = {
  /* args */
};
