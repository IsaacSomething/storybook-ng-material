import { Story, Meta } from '@storybook/angular';
import Sidenav from './sidenav.component';

export default {
  title: 'Components/Sidenav',
  component: Sidenav,
  argTypes: {
    mode: {
      options: ['over', 'push', 'side'],
      control: { type: 'radio' },
    },
    position: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
    closedStart: { action: 'Sidenav closed start' },
    openedStart: { action: 'Sidenav opened start' },
    openedChange: { action: 'Sidenav opened changed' },
    onPositionChanged: { action: 'Sidenav position changed' },
  },
  parameters: { options: { showPanel: true } },
} as Meta;

const disableTypes = {
  closedStart: { table: { disable: true } },
  onPositionChanged: { table: { disable: true } },
  openedChange: { table: { disable: true } },
  openedStart: { table: { disable: true } },
};

const SidenavContainer: Story<Sidenav> = (args: Sidenav) => ({
  props: args,
});
export const Default = SidenavContainer.bind({});
Default.argTypes = { ...disableTypes };
