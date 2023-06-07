import { Story, Meta } from '@storybook/angular';
import Helpers from './helpers.component';

export default {
  title: 'Helpers/Padding & Margin',
  component: Helpers,
  argTypes: {
    padding: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    paddingLeft: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    paddingRight: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    margin: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    marginLeft: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    marginRight: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
    },
    parameters: { options: { showPanel: true } },
  },
} as Meta;

const defaultArgs = {
  padding: 0,
  margin: 0,
};

const disableTypes = {
  ngOnChanges: { table: { disable: true } },
  code: { table: { disable: true } },
  parameters: { table: { disable: true } },
};

const Template: Story<Helpers> = (args: Helpers) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disableTypes };
