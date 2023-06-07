import { Story, Meta } from '@storybook/angular';
import SlideToggle from './slide-toggle.component';

export default {
  title: 'Forms/Slide Toggle',
  component: SlideToggle,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<SlideToggle> | undefined = {
  color: 'primary',
  disabled: false,
  contained: false,
};

const Template: Story<SlideToggle> = (args: SlideToggle) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Contained = Template.bind({});
Contained.args = {
  ...defaultArgs,
  contained: true,
};
