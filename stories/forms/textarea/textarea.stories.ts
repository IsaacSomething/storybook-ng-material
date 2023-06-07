import { Story, Meta } from '@storybook/angular';
import Textarea from './textarea.component';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Textarea> = (args: Textarea) => ({
  props: args,
  argTypes: {
    color: { control: { type: 'radio' } },
    disabled: { control: { type: 'boolean' } },
  },
});

const disabledTypes = {
  triggerResize: { table: { disable: true } },
  autosize: { table: { disable: true } },
};

const defaultArgs: Partial<Textarea> | undefined = {
  color: 'primary',
  appearance: 'standard',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disabledTypes };
