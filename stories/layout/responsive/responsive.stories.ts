import { Story, Meta } from '@storybook/angular';
import Responsive from './responsive.component';

export default {
  title: 'Layout/Responsive',
  component: Responsive,
  parameters: { options: { showPanel: true } },
} as Meta;

const disableTypes = {
  xSmall$: { table: { disable: true } },
  small$: { table: { disable: true } },
  medium$: { table: { disable: true } },
  large$: { table: { disable: true } },
  xLarge$: { table: { disable: true } },
  size$: { table: { disable: true } },
  currentScreenSize: { table: { disable: true } },
  ngOnInit: { table: { disable: true } },
};

const Template: Story<Responsive> = (args: Responsive) => ({
  props: args,
});

export const Default = Template.bind({});
Default.argTypes = { ...disableTypes };
