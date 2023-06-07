import { Story, Meta } from '@storybook/angular';
import Dialog from './dialog.component';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Dialog> | undefined = {
  color: 'primary',
  hasBackdrop: true,
  disableClose: true,
};

const Template: Story<Dialog> = (args: Dialog) => ({
  props: args,
});
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
