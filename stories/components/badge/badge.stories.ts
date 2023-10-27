import type { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { BadgeModule } from './badge.component';

const argTypes: ArgTypes<BadgeModule> = {
  label: { control: { type: 'text' }, name: 'Label' },
  color: {
    options: ['primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
    name: 'Size'
  },
  position: {
    options: ['above after', 'above before', 'below before', 'below after', 'before', 'after', 'above', 'below'],
    control: { type: 'select' },
    name: 'Position'
  },
  disabled: { control: { type: 'boolean' }, name: 'Disabled' },
  overlap: { control: { type: 'boolean' }, name: 'Overlay' },
  hidden: { control: { type: 'boolean' }, name: 'Hidden' }
};

const args: Partial<BadgeModule> = {
  label: '0',
  color: 'primary',
  size: 'medium',
  position: 'above after',
  disabled: false,
  overlap: false,
  hidden: false
};

const meta: Meta<BadgeModule> = {
  title: 'Components/Badge',
  component: BadgeModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Badge: StoryObj<BadgeModule> = { args };
