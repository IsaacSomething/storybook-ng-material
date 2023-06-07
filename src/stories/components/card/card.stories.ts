import { Meta, StoryObj } from '@storybook/angular';
import { CardModule } from './card.component';

/* const argTypes: ArgTypes<CardModule> = {};

const args: Partial<CardModule> = {
  placeholder: '0',
  color: 'primary',
  autoActiveFirstOption: false,
  autoSelectActiveOption: false,
  hideSingleSelectionIndicator: false,
}; */

const meta: Meta<CardModule> = {
  title: 'Components/Card',
  component: CardModule,
  parameters: { options: { showPanel: true } }
  /* argTypes */
};

export default meta;
type Story = StoryObj<CardModule>;

export const Card: Story = {
  /* args */
};
