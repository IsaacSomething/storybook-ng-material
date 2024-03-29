import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ProgressBarModule } from './progress-bar.component';

const argTypes: ArgTypes<ProgressBarModule> = {
  value: { control: { type: 'range', min: 0, max: 100 }, name: 'Value' },
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  mode: {
    options: ['determinate', 'indeterminate', 'buffer', 'query'],
    control: { type: 'radio' },
    name: 'Mode'
  }
};

const args: Partial<ProgressBarModule> = {
  value: 50,
  color: 'default',
  mode: 'determinate'
};

const meta: Meta<ProgressBarModule> = {
  title: 'Components/Progress Bar',
  component: ProgressBarModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const ProgressBar: StoryObj<ProgressBarModule> = { args };
