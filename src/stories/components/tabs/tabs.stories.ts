import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TabsModule } from './tabs.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* const argTypes: ArgTypes<TabsModule> = {
  yPosition: {
    options: ['above', 'below'],
    control: { type: 'radio' },
    name: 'Y position'
  },
  xPosition: {
    options: ['before', 'after'],
    control: { type: 'radio' },
    name: 'X position'
  },
  hasBackdrop: { control: { type: 'boolean' }, name: 'Has backdrop' },
  overlapTrigger: { control: { type: 'boolean' }, name: 'Overlap trigger' }
}; */

const args: Partial<TabsModule> = {};

const meta: Meta<TabsModule> = {
  title: 'Components/Tabs',
  component: TabsModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })]
  /* argTypes */
};

export default meta;
type Story = StoryObj<TabsModule>;

export const Tabs: Story = {
  /* args */
};
