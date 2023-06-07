import { Story, Meta } from '@storybook/angular';
import Flexbox from './flexbox.component';

export default {
  title: 'Layout/Flexbox',
  component: Flexbox,
  argTypes: {
    cardCount: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
      name: 'Number of cards',
    },
    rowGap: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      name: 'row-gap:',
    },
    columnGap: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      name: 'column-gap:',
    },
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse', null],
      control: { type: 'select' },
      name: 'flex-direction:',
    },
    flexWrap: {
      options: ['nowrap', 'wrap', 'wrap-reverse', null],
      control: { type: 'select' },
      name: 'flex-wrap:',
    },
    justifyContent: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'left',
        'right',
        null,
      ],
      control: { type: 'select' },
      name: 'justify-content:',
    },
    alignItems: {
      options: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'first-baseline',
        'last-baseline',
        'start',
        'end',
        'self-start',
        'self-end',
        null,
      ],
      name: 'align-items:',
    },
    alignContent: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
        'start',
        'end',
        'baseline',
        'first-baseline',
        'last-baseline',
        null,
      ],
      control: { type: 'select' },
      name: 'align-content:',
    },
    safe: {
      control: { type: 'boolean' },
    },
    fullHeight: {
      control: { type: 'boolean' },
      name: 'Full height',
    },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const disabledTypes = {
  cards: { table: { disable: true } },
};

const defaultArgs: Partial<Flexbox> | undefined = {
  cardCount: 4,
  rowGap: 16,
  columnGap: 16,
  direction: 'row',
  flexWrap: null,
  justifyContent: null,
  alignItems: null,
  alignContent: null,
  safe: false,
  fullHeight: false,
};

const Template: Story<Flexbox> = (args: Flexbox) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disabledTypes };
