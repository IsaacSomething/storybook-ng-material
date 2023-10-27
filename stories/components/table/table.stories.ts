import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TableModule } from './table.component';

const argTypes: ArgTypes<TableModule> = {
  hasStyles: { control: { type: 'boolean' }, name: 'Has styles' },
  clear: { control: { type: 'boolean' }, name: 'Clear data' },
  displayedColumns: { table: { disable: true } },
  dataSource: { table: { disable: true } },
  ngAfterViewInit: { table: { disable: true } },
  sort: { table: { disable: true } }
};

const args: Partial<TableModule> = {
  hasStyles: false,
  clear: false
};

const meta: Meta<TableModule> = {
  title: 'Components/Table',
  component: TableModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Table: StoryObj<TableModule> = { args };
