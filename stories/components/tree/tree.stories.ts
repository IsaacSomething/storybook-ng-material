import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Story, Meta } from '@storybook/angular';
import Tree from './tree.component';
import { ExampleFlatNode, TreeModel } from './tree.model';

export default {
  title: 'Components/Tree',
  component: Tree,
  parameters: { options: { showPanel: true } },
} as Meta;

const defaultArgs: Partial<Tree> | undefined = {
  dataSource: new ArrayDataSource(TreeModel.TREE_DATA),
  treeControl: new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  ),
};

const disableTypes = {
  dataSource: { table: { disable: true } },
  treeControl: { table: { disable: true } },
  hasChild: { table: { disable: true } },
  getParentNode: { table: { disable: true } },
  shouldRender: { table: { disable: true } },
};

const Template: Story<Tree> = (args: Tree) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disableTypes };
