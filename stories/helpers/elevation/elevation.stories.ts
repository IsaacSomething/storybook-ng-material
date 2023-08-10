import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ElevationModule } from './elevation.component';

const argTypes: ArgTypes<ElevationModule> = {
  elevation: { control: { type: 'range', max: 24, min: 0 }, name: 'Elevation' }
};

const args: Partial<ElevationModule> = {
  elevation: 12
};

const meta: Meta<ElevationModule> = {
  title: 'Helpers/Elevation',
  component: ElevationModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

type Story = StoryObj<ElevationModule>;
export default meta;
export const Elevation: Story = { args };
