import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { AutocompleteModule } from './autocomplete.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<AutocompleteModule> = {};

const args: Partial<AutocompleteModule> = {
  placeholder: '0',
  color: 'primary',
  autoActiveFirstOption: false,
  autoSelectActiveOption: false,
  hideSingleSelectionIndicator: false,
}; */

const meta: Meta<AutocompleteModule> = {
  title: 'Components/Autocomplete',
  component: AutocompleteModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } }
  /* argTypes */
};

export default meta;
type Story = StoryObj<AutocompleteModule>;

export const Autocomplete: Story = {
  /* args */
};
