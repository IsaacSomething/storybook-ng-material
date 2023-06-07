import { Story, Meta } from '@storybook/angular';
import Menu from './menu.component';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    xPosition: {
      options: ['before', 'after'],
      control: { type: 'radio' },
    },
    yPosition: {
      options: ['above', 'below'],
      control: { type: 'radio' },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Menu> | undefined = {
  xPosition: 'after',
  yPosition: 'below',
  hasBackdrop: false,
  overlapTrigger: false,
};

const Template: Story<Menu> = (args: Menu) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
