import { Story, Meta } from '@storybook/angular';
import Grid from './grid.component';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Grid> = (args: Grid) => ({
  props: args,
});

export const Default = Template.bind({});
