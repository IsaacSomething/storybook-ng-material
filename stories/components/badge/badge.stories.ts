import { Story, Meta } from '@storybook/angular';
import Badge from './badge.component';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    position: {
      options: [
        'above after',
        'above before',
        'below before',
        'below after',
        'before',
        'after',
        'above',
        'below',
      ],
      control: { type: 'select' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const defaultArgs: Partial<Badge> | undefined = {
  label: '0',
  color: 'primary',
  size: 'medium',
  position: 'above after',
  disabled: false,
  overlap: false,
  hidden: false,
};

const Template: Story<Badge> = (args: Badge) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
