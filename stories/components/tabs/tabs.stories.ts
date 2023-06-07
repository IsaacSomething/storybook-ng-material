import { Story, Meta } from '@storybook/angular';
import Tabs from './tabs.component';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn', 'default'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Tabs> | undefined = {
  color: 'default',
  disabled: false,
  align: 'start',
};

const Template: Story<Tabs> = (args: Tabs) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.parameters = {
  docs: {
    source: {
      code: `
        <mat-tab-group>
          <mat-tab label="First"> Content 1 </mat-tab>
          <mat-tab label="Second"> Content 2 </mat-tab>
          <mat-tab label="Third"> Content 3 </mat-tab>
        </mat-tab-group>
      `,
      language: 'html',
    },
  },
};
