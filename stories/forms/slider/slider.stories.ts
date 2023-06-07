import { Story, Meta } from '@storybook/angular';
import Slider from './slider.component';

export default {
  title: 'Forms/Slider',
  component: Slider,
  parameters: { options: { showPanel: true } },
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    step: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    tickInterval: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    disabled: { control: { type: 'boolean' } },
    invert: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<Slider> = (args: Slider) => ({
  props: args,
});

const defaultArgs: Partial<Slider> | undefined = {
  color: 'primary',
  tickInterval: 0,
  step: 1,
  disabled: false,
  vertical: false,
  thumbLabel: false,
  invert: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
