import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ToolbarModule } from './toolbar.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const argTypes: ArgTypes<ToolbarModule> = {
  color: {
    options: ['default', 'primary', 'accent', 'warn'],
    control: { type: 'radio' },
    name: 'Color'
  }
};

const args: Partial<ToolbarModule> = {
  color: 'default'
};

const meta: Meta<ToolbarModule> = {
  title: 'Components/Toolbar',
  component: ToolbarModule,
  parameters: { options: { showPanel: true } },
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  argTypes
};

export default meta;
export const Toolbar: StoryObj<ToolbarModule> = { args };
