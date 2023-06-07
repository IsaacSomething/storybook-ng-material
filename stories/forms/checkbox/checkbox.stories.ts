import { Story, Meta } from '@storybook/angular';
import Checkbox from './checkbox.component';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Checkbox> = (args: Checkbox) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    labelPosition: {
      options: ['before', 'after'],
      control: { type: 'select' },
      name: 'Label position',
    },
  },
});

const defaultArgs: Partial<Checkbox> | undefined = {
  label: '[Checkbox label]',
  color: 'primary',
  labelPosition: 'after',
  disabled: false,
  indeterminate: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
