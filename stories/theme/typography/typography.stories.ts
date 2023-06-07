import { Story, Meta } from '@storybook/angular';
import Typography from './typography.component';

export default {
  title: 'Theme/Typography',
  component: Typography,
  parameters: { options: { showPanel: true } },
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'default'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Typography> = (args: Typography) => ({
  props: args,
});

export const Default = Template.bind({});
