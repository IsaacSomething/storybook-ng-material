import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { AutocompleteModule } from './autocomplete.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<AutocompleteModule> = {
  autoActiveFirstOption: { control: { type: 'boolean' }, name: 'Disabled' },
  _filter: { table: { disable: true } },
  ngOnInit: { table: { disable: true } },
  options: { table: { disable: true } },
  myControl: { table: { disable: true } },
  filteredOptions: { table: { disable: true } }
};

const args: Partial<AutocompleteModule> = {
  autoActiveFirstOption: false
};

const meta: Meta<AutocompleteModule> = {
  title: 'Forms/Autocomplete',
  component: AutocompleteModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Autocomplete: StoryObj<AutocompleteModule> = { args };
