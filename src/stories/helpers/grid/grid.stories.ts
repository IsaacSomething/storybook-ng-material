import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { GridModule } from './grid.component';

const argTypes: ArgTypes<GridModule> = {};

const args: Partial<GridModule> = {};

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
