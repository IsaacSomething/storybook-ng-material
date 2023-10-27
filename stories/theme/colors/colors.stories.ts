import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { ColorsModule } from './colors.component';

const argTypes: ArgTypes<ColorsModule> = {
  color: {
    options: ['primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  }
};

const args: Partial<ColorsModule> = {
  color: 'primary'
};

const meta: Meta<ColorsModule> = {
  title: 'Theme/Colors',
  component: ColorsModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Colors: StoryObj<ColorsModule> = { args };
