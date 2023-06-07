import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleFlatNode, TreeModel } from './tree.model';

@Component({
  selector: 'storybook-tree',
  standalone: true,
  imports: [
    MatTreeModule,
    MatIconModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    MatButtonModule,
  ],
  template: `
    <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
      <cdk-tree-node
        *cdkTreeNodeDef="let node"
        cdkTreeNodePadding
        [style.display]="shouldRender(node) ? 'flex' : 'none'"
        class="example-tree-node"
      >
        <button mat-icon-button disabled></button>
        {{ node.name }}
      </cdk-tree-node>

      <cdk-tree-node
        *cdkTreeNodeDef="let node; when: hasChild"
        cdkTreeNodePadding
        [style.display]="shouldRender(node) ? 'flex' : 'none'"
        class="example-tree-node"
      >
        <button
          mat-icon-button
          cdkTreeNodeToggle
          [attr.aria-label]="'Toggle ' + node.name"
          (click)="node.isExpanded = !node.isExpanded"
          [style.visibility]="node.expandable ? 'visible' : 'hidden'"
        >
          <mat-icon class="mat-icon-rtl-mirror">
            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
          </mat-icon>
        </button>

        {{ node.name }}
      </cdk-tree-node>
    </cdk-tree>
  `,
})
export default class Tree {
  @Input() treeControl: any;
  @Input() dataSource!: ArrayDataSource<ExampleFlatNode>;

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TreeModel.TREE_DATA.indexOf(node);
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TreeModel.TREE_DATA[i].level === node.level - 1) {
        return TreeModel.TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}
