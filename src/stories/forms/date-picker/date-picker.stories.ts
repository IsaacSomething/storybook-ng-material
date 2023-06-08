import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { DatePickerModule } from './date-picker.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<DatePickerModule> = {};

const args: Partial<DatePickerModule> = {};

const meta: Meta<DatePickerModule> = {
  title: 'Forms/Date Picker',
  component: DatePickerModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<DatePickerModule>;

export const DatePicker: Story = {
  /* args */
};
