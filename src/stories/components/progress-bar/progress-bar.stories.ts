import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ProgressBarModule } from './progress-bar.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<ProgressBarModule> = {
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

const args: Partial<ProgressBarModule> = {};

const meta: Meta<ProgressBarModule> = {
  title: 'Components/Progress Bar',
  component: ProgressBarModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<ProgressBarModule>;

export const ProgressBar: Story = {
  /* args */
};
