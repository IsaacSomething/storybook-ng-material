import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { SidenavModule } from './sidenav.component';

const argTypes: ArgTypes<SidenavModule> = {};

const args: Partial<SidenavModule> = {};

const meta: Meta<SidenavModule> = {
  title: 'Components/Sidenav',
  component: SidenavModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
type Story = StoryObj<SidenavModule>;

export const Sidenav: Story = {
  args
};
