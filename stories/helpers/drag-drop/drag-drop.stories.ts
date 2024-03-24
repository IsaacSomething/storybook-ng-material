import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { SbDragDropModule } from './drag-drop.component';

const argTypes: ArgTypes<SbDragDropModule> = {
  handle: { control: { type: 'boolean' }, name: 'Handle' },
  boundary: { control: { type: 'boolean' }, name: 'Boundary' }
};

const args: Partial<SbDragDropModule> = {
  handle: false,
  boundary: false
};

const meta: Meta<SbDragDropModule> = {
  title: 'Helpers/Drop Drag',
  component: SbDragDropModule,
  parameters: { options: { showPanel: true } },
  argTypes
};

export default meta;
export const DropDrag: StoryObj<SbDragDropModule> = {};
