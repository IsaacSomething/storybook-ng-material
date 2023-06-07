import { Story, Meta } from '@storybook/angular';
import DragDrop from './dragDrop.component';

export default {
  title: 'Components/DragDrop',
  component: DragDrop,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<DragDrop> = (args: DragDrop) => ({
  props: args,
});

export const Default = Template.bind({});
