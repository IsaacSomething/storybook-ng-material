import { Story, Meta } from '@storybook/angular';
import BottomSheet from './bottom-sheet.component';

export default {
  title: 'Components/Bottom Sheet',
  component: BottomSheet,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

const disabledTypes = { dataSource: { table: { disable: true } } };

const Template: Story<BottomSheet> = (args: BottomSheet) => ({
  props: args,
});

export const Default = Template.bind({});
