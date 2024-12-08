import { TreeViewNode } from '../../models/tree-view.model';

export interface EmsTreeViewProps {
  data: TreeViewNode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect?: (nodeId: string) => void;
}

export const EmsTreeView = (props: EmsTreeViewProps) => {
  const { data } = props;

  return (
    <>
      <EmsTree data={data} />
    </>
  );
};

export const EmsTree = (props: EmsTreeViewProps) => {
  const { data } = props;

  return (
    <ul>
      {data.map((node) => (
        <li key={node.id} style={{ color: node.color, backgroundColor: node.backgroundColor }}>
          {node.label}
          {node.children && <EmsTreeView data={node.children} />}
        </li>
      ))}
    </ul>
  );
};
