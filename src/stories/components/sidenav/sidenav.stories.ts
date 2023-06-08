import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { SidenavModule } from './sidenav.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<SidenavModule> = {
  position: {
    options: ['start', 'end'],
    control: { type: 'radio' },
    name: 'Position'
  },
  mode: {
    options: ['over', 'push', 'side'],
    control: { type: 'radio' },
    name: 'Mode'
  },
  hasBackdrop: { control: { type: 'boolean' }, name: 'Has backdrop' }
};

const args: Partial<SidenavModule> = {
  position: 'start',
  mode: 'over',
  hasBackdrop: false
};

const meta: Meta<SidenavModule> = {
  title: 'Components/Sidenav',
  component: SidenavModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
type Story = StoryObj<SidenavModule>;

export const Sidenav: Story = {
  args
};
