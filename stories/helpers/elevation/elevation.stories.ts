import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { SbElevationModule } from './elevation.component';

const argTypes: ArgTypes<SbElevationModule> = {
  elevation: { control: { type: 'range', max: 24, min: 0 }, name: 'Elevation' }
};

const args: Partial<SbElevationModule> = {
  elevation: 12
};

const meta: Meta<SbElevationModule> = {
  title: 'Helpers/Elevation',
  component: SbElevationModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Elevation: StoryObj<SbElevationModule> = { args };
