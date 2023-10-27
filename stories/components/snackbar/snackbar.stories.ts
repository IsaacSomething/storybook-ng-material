import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SnackbarModule } from './snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const argTypes: ArgTypes<SnackbarModule> = {
  label: { control: { type: 'text' }, name: 'Label' },
  hasAction: { control: { type: 'boolean' }, name: 'Has action' },
  duration: { control: { type: 'range', step: 1000, min: 1000, max: 10000 }, name: 'Duration' },
  xPosition: {
    options: ['start', 'center', 'end', 'left', 'right'],
    control: { type: 'radio' },
    name: 'X position'
  },
  yPosition: {
    options: ['top', 'bottom'],
    control: { type: 'radio' },
    name: 'Y position'
  },
  openSnackbar: { table: { disable: true } }
};

const args: Partial<SnackbarModule> = {
  label: 'Lorem ipsum dolor.',
  xPosition: 'center',
  yPosition: 'bottom',
  duration: 5000,
  hasAction: false
};

const meta: Meta<SnackbarModule> = {
  title: 'Components/Snackbar',
  component: SnackbarModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Snackbar: StoryObj<SnackbarModule> = { args };
