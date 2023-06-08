import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TabsModule } from './tabs.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<TabsModule> = {
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  },
  backgroundColor: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Background color'
  },
  stretch: { control: { type: 'boolean' }, name: 'Stretch' },
  duration: { control: { type: 'range', step: 100, max: 1000 }, name: 'Animation duration' },
  align: { control: { type: 'boolean' }, name: 'Align' },
  fitInkBarToContent: { control: { type: 'boolean' }, name: 'Fit ink bar to content' },
  headerPosition: { control: { type: 'select', options: ['below', 'above'] }, name: 'Header position' }
};

const args: Partial<TabsModule> = {
  color: 'primary',
  backgroundColor: 'primary',
  stretch: true,
  duration: 100,
  align: true,
  fitInkBarToContent: true,
  headerPosition: 'below'
};

const meta: Meta<TabsModule> = {
  title: 'Components/Tabs',
  component: TabsModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

type Story = StoryObj<TabsModule>;
export default meta;
export const Tabs: Story = { args };
