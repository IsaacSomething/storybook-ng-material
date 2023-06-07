import { Story, Meta } from '@storybook/angular';
import CardDrawer from './card-drawer.component';
import CardExpansion from './card-expansion.component';
import Card from './card.component';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    color: {
      options: ['default', 'primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
    drawerSize: {
      control: { type: 'range', min: 40, max: 100, step: 5 },
    },
    image: { control: { type: 'boolean' } },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Card> = (args: Card) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { color: 'default' };

export const Image = Template.bind({});
Image.args = { image: true };

export const Expansion: Story<CardExpansion> = (args: CardExpansion) => ({
  component: CardExpansion,
  props: args,
  color: 'default',
});

export const Drawer: Story<CardDrawer> = (args: CardDrawer) => ({
  component: CardDrawer,
  props: args,
  argTypes: {
    color: 'default',
    drawerSize: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
  },
});
