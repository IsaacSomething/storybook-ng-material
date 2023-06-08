import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { AutocompleteModule } from './autocomplete.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<AutocompleteModule> = {
  _filter: { table: { disable: true } },
  ngOnInit: { table: { disable: true } },
  options: { table: { disable: true } },
  myControl: { table: { disable: true } },
  filteredOptions: { table: { disable: true } }
};

const args: Partial<AutocompleteModule> = {};

const meta: Meta<AutocompleteModule> = {
  title: 'Components/Autocomplete',
  component: AutocompleteModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<AutocompleteModule>;

export const Autocomplete: Story = {
  /* args */
};
