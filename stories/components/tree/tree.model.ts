export interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

export namespace TreeModel {
  export const TREE_DATA: ExampleFlatNode[] = [
    {
      name: '[Top Level]',
      expandable: true,
      level: 0,
    },
    {
      name: '[Level 1: Item 1]',
      expandable: false,
      level: 1,
    },
    {
      name: '[Level 1: Item 2]',
      expandable: false,
      level: 1,
    },
    {
      name: '[Level 1: Item 3]',
      expandable: false,
      level: 1,
    },
    {
      name: '[Top Level]',
      expandable: true,
      level: 0,
    },
    {
      name: '[Level 1: Item 1]',
      expandable: true,
      level: 1,
    },
    {
      name: '[Level 2: Item 2]',
      expandable: false,
      level: 2,
    },
    {
      name: '[Level 2: Item 1]',
      expandable: false,
      level: 2,
    },
    {
      name: '[Level 1: Item 2]',
      expandable: true,
      level: 1,
    },
    {
      name: '[Level 2: Item 1]',
      expandable: false,
      level: 2,
    },
    {
      name: '[Level 2: Item 2]',
      expandable: false,
      level: 2,
    },
  ];
}
