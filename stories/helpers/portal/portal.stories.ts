import { ArgTypes, Meta, StoryObj } from '@storybook/angular';
import { SbPortalModule } from './portal.component';

/* const argTypes: ArgTypes<PortalModule> = {}; */

const meta: Meta<SbPortalModule> = {
  title: 'Helpers/Portal',
  component: SbPortalModule,
  parameters: { options: { showPanel: true } }
  /* argTypes */
};

export default meta;
export const Portal: StoryObj<SbPortalModule> = {};
