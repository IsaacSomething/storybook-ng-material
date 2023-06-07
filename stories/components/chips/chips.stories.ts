import { Story, Meta } from '@storybook/angular';
import Chips from './chips.component';

export default {
  title: 'Components/Chips',
  component: Chips,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Chips> = (args: Chips) => ({
  props: args,
});

export const Default = Template.bind({});
