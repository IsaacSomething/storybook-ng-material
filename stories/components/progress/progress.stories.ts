import { Story, Meta } from '@storybook/angular';
import ProgressComponent from './progress.component';

export default {
  title: 'Components/Progress',
  component: ProgressComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
    options: { showPanel: true }
  },
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' }
    },
    type: {
      control: { disable: true }
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 30, step: 1 }
    },
    diameter: {
      control: { type: 'range', min: 15, max: 200, step: 5 }
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
} as Meta;

const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args
});

export const Bar = Template.bind({});
Bar.args = { type: 'bar' };
Bar.argTypes = {
  strokeWidth: {
    control: { disable: true }
  },
  diameter: {
    control: { disable: true }
  }
};

export const Spinner = Template.bind({});
Spinner.args = { type: 'spinner' };
