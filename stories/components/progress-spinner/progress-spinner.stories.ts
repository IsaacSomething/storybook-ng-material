import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ProgressSpinnerModule } from './progress-spinner.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<ProgressSpinnerModule> = {
  value: { control: { type: 'range', max: '100', min: 10 }, name: 'Value' },
  diameter: { control: { type: 'range', max: '400', min: 70 }, name: 'Diameter' },
  strokeWidth: { control: { type: 'range', max: '20', min: 1 }, name: 'Stroke width' },
  mode: {
    options: ['determinate', 'indeterminate'],
    control: { type: 'radio' },
    name: 'Mode'
  },
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  }
};

const args: Partial<ProgressSpinnerModule> = {
  value: 50,
  diameter: 100,
  strokeWidth: 10,
  mode: 'determinate',
  color: 'primary'
};

const meta: Meta<ProgressSpinnerModule> = {
  title: 'Components/Progress Spinner',
  component: ProgressSpinnerModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
type Story = StoryObj<ProgressSpinnerModule>;

export const ProgressSpinner: Story = {
  args
};
