import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { GridModule } from './grid.component';

const argTypes: ArgTypes<GridModule> = {
  tiles: { table: { disable: true } },
  ngOnInit: { table: { disable: true } },
  cols: { control: { type: 'range', max: 5, min: 1 }, name: 'Columns' },
  colOne: { control: { type: 'range', max: 5, min: 1 }, name: 'Column 1' },
  rowOne: { control: { type: 'range', max: 5, min: 1 }, name: 'Row 1' },
  colTwo: { control: { type: 'range', max: 5, min: 1 }, name: 'Column 2' },
  rowTwo: { control: { type: 'range', max: 5, min: 1 }, name: 'Row 2' },
  colThree: { control: { type: 'range', max: 5, min: 1 }, name: 'Column 3' },
  rowThree: { control: { type: 'range', max: 5, min: 1 }, name: 'Row 3' },
  colFour: { control: { type: 'range', max: 5, min: 1 }, name: 'Column 4' },
  rowFour: { control: { type: 'range', max: 5, min: 1 }, name: 'Row 4' }
};

const args: Partial<GridModule> = {
  cols: 4,
  colOne: 2,
  rowOne: 1,
  colTwo: 1,
  rowTwo: 2,
  colThree: 1,
  rowThree: 1,
  colFour: 2,
  rowFour: 1
};

const meta: Meta<GridModule> = {
  title: 'Helpers/Grid',
  component: GridModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<GridModule>;

export const Grid: Story = {
  args
};
