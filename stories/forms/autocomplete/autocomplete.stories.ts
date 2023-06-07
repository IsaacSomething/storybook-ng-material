import { FormControl } from '@angular/forms';
import { Story, Meta } from '@storybook/angular';
import Autocomplete from './autocomplete.component';

export default {
  title: 'Forms/Autocomplete',
  component: Autocomplete,
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Autocomplete> | undefined = {
  label: '[Autocomplete label]',
  color: 'primary',
  appearance: 'standard',
  control: new FormControl(''),
  items: ['Item 1', 'Position 2', 'Level 3'],
};

const disabledTypes = {
  control: { table: { disable: true } },
  items: { table: { disable: true } },
  filteredOptions: { table: { disable: true } },
  ngOnInit: { table: { disable: true } },
  filter: { table: { disable: true } },
};

const Template: Story<Autocomplete> = (args: Autocomplete) => ({
  props: args,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disabledTypes };
