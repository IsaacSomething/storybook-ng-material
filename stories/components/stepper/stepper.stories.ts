import { Story, Meta } from '@storybook/angular';
import Stepper from './stepper.component';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Stepper> = (args: Stepper) => ({
  props: args,
});

export const Default = Template.bind({});
