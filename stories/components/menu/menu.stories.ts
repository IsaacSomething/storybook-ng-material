import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { MenuModule } from './menu.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<MenuModule> = {
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
};

const args: Partial<MenuModule> = {
  yPosition: 'below',
  xPosition: 'after',
  hasBackdrop: true,
  overlapTrigger: false
};

const meta: Meta<MenuModule> = {
  title: 'Components/Menu',
  component: MenuModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Menu: StoryObj<MenuModule> = { args };
