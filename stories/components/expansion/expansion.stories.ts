import { Story, Meta } from '@storybook/angular';
import Expansion from './expansion.component';

export default {
  title: 'Components/Expansion',
  component: Expansion,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    mode: {
      options: ['flat', 'default'],
      control: { type: 'radio' },
    },
    hideToggle: { control: { type: 'boolean' } },
    dense: { control: { type: 'boolean' } },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Expansion> = (args: Expansion) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  title: '[Title]',
  description: '[description]',
  elevation: 1,
  mode: 'default',
  dense: false,
  hideToggle: false,
};
