import { Story, Meta } from '@storybook/angular';
import DatePickerMobile from './date-picker-mobile.component';
import DatePickerRange from './date-picker-range.component';
import DatePicker from './date-picker.component';

export default {
  title: 'Forms/Date Picker',
  component: DatePicker,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<DatePicker> = (args: DatePicker) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    startView: {
      options: ['month', 'year', 'multi-year'],
      control: { type: 'select' },
    },
    disabled: { control: { type: 'boolean' } },
  },
});

const defaultArgs: Partial<DatePicker> | undefined = {
  color: 'primary',
  appearance: 'standard',
  startView: 'month',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

/* Date picker mobile UI */
export const Mobile: Story<DatePickerMobile> = (args: DatePickerMobile) => ({
  component: DatePickerMobile,
  props: args,
});
Mobile.args = { ...defaultArgs };

/* Date picker range */
export const Range: Story<DatePickerRange> = (args: DatePickerRange) => ({
  component: DatePickerRange,
  props: args,
});
Range.args = { ...defaultArgs };
