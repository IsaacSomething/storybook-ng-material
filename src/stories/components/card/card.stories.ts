import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { CardModule } from './card.component';

const argTypes: ArgTypes<CardModule> = {
  title: { control: { type: 'boolean' }, name: 'Has title' },
  subtitle: { control: { type: 'boolean' }, name: 'Has subtitle' },
  content: { control: { type: 'boolean' }, name: 'Has content' },
  actions: { control: { type: 'boolean' }, name: 'Has actions' },
  footer: { control: { type: 'boolean' }, name: 'Has footer' },
  avatar: { control: { type: 'boolean' }, name: 'Has avatar' },
  image: { control: { type: 'boolean' }, name: 'Has image' },
  media: { control: { type: 'boolean' }, name: 'Has media' },
  mediaSize: {
    options: ['xl', 'lg', 'md', 'sm'],
    control: { type: 'radio' },
    name: 'Media size'
  },
  align: {
    options: ['start', 'end'],
    control: { type: 'radio' },
    name: 'Align actions'
  },
  appearance: {
    options: ['outlined', 'raised'],
    control: { type: 'radio' },
    name: 'Appearance'
  }
};

const args: Partial<CardModule> = {
  title: true,
  subtitle: true,
  content: true,
  actions: true,
  footer: true,
  avatar: true,
  image: true,
  media: true,
  mediaSize: 'md',
  align: 'start',
  appearance: 'outlined'
};

const meta: Meta<CardModule> = {
  title: 'Components/Card',
  component: CardModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<CardModule>;

export const Card: Story = {
  args
};
