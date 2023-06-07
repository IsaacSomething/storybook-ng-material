import { Story, Meta } from '@storybook/angular';
import Snackbar from './snackbar.component';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'default'],
      control: { type: 'radio' },
    },
    verticalPosition: {
      options: ['top', 'bottom'],
      control: { type: 'select' },
    },
    horizontalPosition: {
      options: ['start', 'center', 'end', 'left', 'right'],
      control: { type: 'select' },
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Snackbar> | undefined = {
  color: 'primary',
  duration: 5000,
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
};

const disableTypes = {
  open: { table: { disable: true } },
};

const Template: Story<Snackbar> = (args: Snackbar) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disableTypes };
