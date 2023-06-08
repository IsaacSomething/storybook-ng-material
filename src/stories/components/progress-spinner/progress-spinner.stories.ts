import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ProgressSpinnerModule } from './progress-spinner.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<ProgressSpinnerModule> = {
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

const args: Partial<ProgressSpinnerModule> = {};

const meta: Meta<ProgressSpinnerModule> = {
  title: 'Components/Progress Spinner',
  component: ProgressSpinnerModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<ProgressSpinnerModule>;

export const ProgressSpinner: Story = {
  /* args */
};
