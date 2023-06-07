import { Story, Meta } from '@storybook/angular';
import Radio from './radio.component';

export default {
  title: 'Forms/Radio',
  component: Radio,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Radio> = (args: Radio) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    labelPosition: {
      options: ['before', 'after'],
      control: { type: 'select' },
      name: 'Label position',
    },
  },
});

const defaultArgs: Partial<Radio> | undefined = {
  label: '[Radio label]',
  color: 'primary',
  labelPosition: 'after',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
