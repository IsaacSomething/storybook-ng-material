import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SliderModule } from './slider.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SliderModule> = {
  color: { options: ['primary', 'accent', 'warn'], control: { type: 'radio' }, name: 'Color' },
  discrete: { control: { type: 'boolean' }, name: 'Discrete' },
  showTickMarks: { control: { type: 'boolean' }, name: 'Show tick marks' },
  range: { control: { type: 'boolean' }, name: 'Show range slider' }
};

const args: Partial<SliderModule> = {
  color: 'primary',
  discrete: false,
  showTickMarks: false
};

const meta: Meta<SliderModule> = {
  title: 'Forms/Slider',
  component: SliderModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

type Story = StoryObj<SliderModule>;
export default meta;
export const Slider: Story = { args };
