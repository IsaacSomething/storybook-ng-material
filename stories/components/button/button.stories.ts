import { Story, Meta } from '@storybook/angular';
import ButtonToggle from './button-toggle.component';
import Button from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    round: { control: { type: 'boolean' } },
  },
});

const urlPrefix =
  'https://www.figma.com/file/B4I9c9XojvfCuHyqlegRWg/material?node-id=';

const designParams = {
  type: 'figma',
  url: `${urlPrefix}?node-id=0%3A1`,
};

const disableTypes = {
  size: { control: { disable: true } },
  type: { control: { disable: true } },
};

const defaultArgs: Partial<Button> | undefined = {
  label: '[Button]',
  color: 'primary',
  disabled: false,
  loading: false,
  round: false,
};

/* Default */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disableTypes };
Default.parameters = {
  design: { ...designParams, url: `${urlPrefix}0%3A1` },
  id: 'test',
};

export const Flat = Template.bind({});
Flat.args = { ...defaultArgs, type: 'flat' };
Flat.parameters = {
  design: { ...designParams, url: `${urlPrefix}1%3A391` },
};
Flat.argTypes = { ...disableTypes };

/* Raised */
export const Raised = Template.bind({});
Raised.args = { ...defaultArgs, type: 'raised' };
Raised.argTypes = { ...disableTypes };

/* Stroked */
export const Stroked = Template.bind({});
Stroked.args = { ...defaultArgs, type: 'stroked' };
Stroked.argTypes = { ...disableTypes };

/* Button Toggle */
export const Toggle: Story<ButtonToggle> = (args: ButtonToggle) => ({
  component: ButtonToggle,
  props: args,
});
