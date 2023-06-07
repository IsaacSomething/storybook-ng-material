import { Story, Meta } from '@storybook/angular';
import Theme from './colors.component';

export default {
  title: 'Theme/Colors',
  component: Theme,
  argTypes: {
    color: { control: false }
  },
  parameters: { options: { showPanel: false } }
} as Meta;

const Template: Story<Theme> = (args: Theme) => ({
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Accent = Template.bind({});
Accent.args = {
  color: 'accent'
};

export const Warn = Template.bind({});
Warn.args = {
  color: 'warn'
};
