import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ElevationModule } from './elevation.component';

const argTypes: ArgTypes<ElevationModule> = {};

const args: Partial<ElevationModule> = {};

const meta: Meta<ElevationModule> = {
  title: 'Helpers/Elevation',
  component: ElevationModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<ElevationModule>;

export const Elevation: Story = {
  args
};
