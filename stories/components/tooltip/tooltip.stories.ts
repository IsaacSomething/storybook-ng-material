import { Story, Meta } from '@storybook/angular';
import Tooltip from './tooltip.component';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { options: { showPanel: true } },
  argTypes: {
    position: {
      options: ['after', 'before', 'above', 'below', 'left', 'right'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    tooltipLabel: {
      control: { type: 'text', label: 'Label' },
      name: 'Tooltip label',
    },
    showDelay: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
      name: 'Show delay',
    },
    hideDelay: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
      name: 'Hide delay',
    },
  },
} as Meta;

const Template: Story<Tooltip> = (args: Tooltip) => ({
  props: args,
});

const defaultArgs: Partial<Tooltip> | undefined = {
  tooltipLabel: '[Tooltip label]',
  color: 'default',
  position: 'below',
  disabled: false,
  showDelay: 0,
  hideDelay: 0,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
