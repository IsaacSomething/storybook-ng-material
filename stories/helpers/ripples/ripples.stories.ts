import { Story, Meta } from '@storybook/angular';
import Ripples from './ripples.component';

export default {
  title: 'Helpers/Ripples',
  component: Ripples,
  argTypes: {
    color: {
      options: ['default', 'primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    radius: {
      control: { type: 'range', min: 0, max: 400, step: 10 },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Ripples> | undefined = {
  color: 'default',
  unbound: false,
  centered: false,
  disabled: false,
  radius: 0,
};

const Template: Story<Ripples> = (args: Ripples) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
