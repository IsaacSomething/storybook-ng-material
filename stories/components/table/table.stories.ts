import { Story, Meta } from '@storybook/angular';
import { TableModel } from './model';
import TableExpandRowAlt from './table-expand-row-alt.component';
import TableExpandRow from './table-expand-row.component';
import TableHeaderFooter from './table-header-footer.component';
import TablePagination from './table-pagination.component';
import TableSort from './table-sort.component';
import Table from './table.component';

const disabledTypes = {
  dataSource: { table: { disable: true } },
  displayedColumns: { table: { disable: true } },
  addBigData: { table: { disable: true } },
  addRow: { table: { disable: true } },
  removeRow: { table: { disable: true } },
  table: { table: { disable: true } },
};

const defaultArgs: Partial<Table> | undefined = {
  displayedColumns: TableModel.displayedColumns,
  dataSource: TableModel.data,
  withHover: false,
  striped: false,
  header: false,
  textTransform: false,
};

export default {
  title: 'Components/Table',
  component: Table,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Table> = (args: Table) => ({
  props: args,
});

/* Default table */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = {
  ...disabledTypes,
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};
Default.parameters = {
  docs: { ...TableModel.defaultCode },
};

/* Table expand row */
export const ExpandRow: Story<TableExpandRow> = (args: TableExpandRow) => ({
  component: TableExpandRow,
  props: args,
});
ExpandRow.args = {
  ...defaultArgs,
  columnsExpand: [...TableModel.displayedColumns, 'expand'],
};
ExpandRow.argTypes = {
  ...disabledTypes,
  columnsExpand: { table: { disable: true } },
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};
ExpandRow.parameters = {
  docs: { ...TableModel.defaultCode },
};

/* Table expand row  alt*/
export const ExpandRowAlt: Story<TableExpandRowAlt> = (
  args: TableExpandRowAlt
) => ({
  component: TableExpandRowAlt,
  props: args,
});
ExpandRowAlt.args = {
  ...defaultArgs,
  columnsExpand: TableModel.displayedColumns,
  withHover: true,
  header: true,
  textTransform: true,
};
ExpandRowAlt.argTypes = {
  ...disabledTypes,
  columnsExpand: { table: { disable: true } },
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};
ExpandRowAlt.parameters = {
  docs: { ...TableModel.defaultCode },
};

/* Table footer Header*/
export const HeaderFooter: Story<TableHeaderFooter> = (
  args: TableHeaderFooter
) => ({
  component: TableHeaderFooter,
  props: args,
});
HeaderFooter.args = {
  ...defaultArgs,
};
HeaderFooter.argTypes = {
  ...disabledTypes,
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};
HeaderFooter.parameters = {
  docs: { ...TableModel.defaultCode },
};

/* Table pagination */
export const Pagination: Story<TablePagination> = (args: TablePagination) => ({
  component: TablePagination,
  props: args,
});
Pagination.args = { ...defaultArgs };
Pagination.argTypes = {
  ...disabledTypes,
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};

/* Table sort */
export const Sort: Story<TableSort> = (args: TableSort) => ({
  component: TableSort,
  props: args,
});
Sort.args = {
  displayedColumns: TableModel.displayedColumns,
  withHover: false,
  striped: false,
  header: false,
  textTransform: false,
};
Sort.argTypes = {
  ...disabledTypes,
  withHover: { control: 'boolean', title: 'With hover' },
  striped: { control: 'boolean' },
  header: { control: 'boolean' },
  textTransform: { control: 'boolean' },
};
