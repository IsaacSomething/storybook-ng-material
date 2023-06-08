import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SnackbarModule } from './snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

/* const argTypes: ArgTypes<SnackbarModule> = {
  hasBackdrop: { control: { type: 'boolean' }, name: 'Backdrop' },
  openSnackbar: { table: { disable: true } }
}; */

/* const args: Partial<SnackbarModule> = {
  hasBackdrop: true
}; */

const meta: Meta<SnackbarModule> = {
  title: 'Components/Snackbar',
  component: SnackbarModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } }
  /* argTypes */
};

export default meta;
type Story = StoryObj<SnackbarModule>;

export const Snackbar: Story = {
  /* args */
};
