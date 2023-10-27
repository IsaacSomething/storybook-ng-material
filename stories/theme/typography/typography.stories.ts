import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { TypographyModule } from './typography.component';

const argTypes: ArgTypes<TypographyModule> = {
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  }
};

const args: Partial<TypographyModule> = {
  color: 'default'
};

const meta: Meta<TypographyModule> = {
  title: 'Theme/Typography',
  component: TypographyModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Typography: StoryObj<TypographyModule> = { args };
