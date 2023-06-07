import { Story, Meta } from '@storybook/angular';
import Figma from './figma.component';

export default {
  title: 'Storybook/Figma',
  component: Figma,
  parameters: { options: { showPanel: true } },
} as Meta;

// This is from my account
const urlPrefix =
  'https://www.figma.com/file/B4I9c9XojvfCuHyqlegRWg/material?node-id=';

const designParams = {
  type: 'figma',
  url: `${urlPrefix}?node-id=0%3A1`,
};

const Template: Story<Figma> = (args: Figma) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  design: {
    ...designParams,
    url: 'https://www.figma.com/file/3Pi5gtn4HauAVNK098GWUs/Mockup?node-id=0%3A1',
  },
};
