export interface TreeViewNode {
  id: string;
  label: string;
  color?: string;
  backgroundColor?: string;
  children?: TreeViewNode[];
}