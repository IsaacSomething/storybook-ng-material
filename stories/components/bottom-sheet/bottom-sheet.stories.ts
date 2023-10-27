import { ArgTypes, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { BottomSheetModule } from './bottom-sheet.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const argTypes: ArgTypes<BottomSheetModule> = {
  hasBackdrop: { control: { type: 'boolean' }, name: 'Backdrop' },
  openBottomSheet: { table: { disable: true } }
};

const args: Partial<BottomSheetModule> = {
  hasBackdrop: true
};

const meta: Meta<BottomSheetModule> = {
  title: 'Components/Bottom Sheet',
  component: BottomSheetModule,
  decorators: [applicationConfig({ providers: [importProvidersFrom(BrowserAnimationsModule)] })],
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const BottomSheet: StoryObj<BottomSheetModule> = { args };
