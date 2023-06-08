import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SliderModule } from './slider.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SliderModule> = {};

const args: Partial<SliderModule> = {};

const meta: Meta<SliderModule> = {
  title: 'Forms/Slider',
  component: SliderModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<SliderModule>;

export const Slider: Story = {
  /* args */
};
