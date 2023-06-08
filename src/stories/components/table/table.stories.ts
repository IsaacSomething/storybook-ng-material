import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { TableModule } from './table.component';

const argTypes: ArgTypes<TableModule> = {};

const args: Partial<TableModule> = {};

const meta: Meta<TableModule> = {
  title: 'Components/Table',
  component: TableModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<TableModule>;

export const Table: Story = {
  args
};
