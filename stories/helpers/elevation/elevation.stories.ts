import { Story, Meta } from '@storybook/angular';
import Elevation from './elevation.component';

export default {
  title: 'Helpers/Elevation',
  component: Elevation,
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Elevation> | undefined = {
  elevation: 1,
};

const Template: Story<Elevation> = (args: Elevation) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
