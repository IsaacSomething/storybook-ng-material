import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { SbClipModule } from './clipboard.component';

const argTypes: ArgTypes<SbClipModule> = {
  text: { table: { disable: true } },
  textValue: { table: { disable: true } },
  textCopy: { table: { disable: true } },
  copied: { table: { disable: true } }
};

const meta: Meta<SbClipModule> = {
  title: 'Helpers/Clipboard',
  component: SbClipModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const Clipboard: StoryObj<SbClipModule> = {};
