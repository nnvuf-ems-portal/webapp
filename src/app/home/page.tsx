import { EmsCalendars } from '../../components/ems-calendars/ems-calendars';
import { EmsTreeView } from '../../components/ems-tree-view/ems-tree-view';
import { TreeViewNode } from '../../models/tree-view.model';

export default function HomePage() {
  const operationManager: TreeViewNode = {
    id: 'operation-manager',
    color: '#ffffff',
    backgroundColor: '#191277',
    label: 'OPERATION MANAGER RESPONSIBILITIES',
    children: [
      {
        id: 'business-unit-1',
        color: '#000000',
        backgroundColor: '#ffffff',
        label: 'Business Unit 1',
        children: [
          {
            id: 'business-objective-1',
            color: '#000000',
            backgroundColor: '#e9ebed',
            label: 'Business Objective 1'
          },
          {
            id: 'business-position-1',
            color: '#000000',
            backgroundColor: '#e9ebed',
            label: 'Business Position 1'
          }
        ]
      },
      {
        id: 'business-unit-2',
        color: '#000000',
        backgroundColor: '#ffffff',
        label: ' Business Unit 2',
        children: [
          {
            id: 'business-objective-1',
            color: '#000000',
            backgroundColor: '#e9ebed',
            label: 'Business Objective 1'
          },
          {
            id: 'business-position-1',
            color: '#000000',
            backgroundColor: '#e9ebed',
            label: 'Business Position 1'
          }
        ]
      }
    ]
  };
  return (
    <>
      <div className='flex items-center justify-center mt-2'>
        <EmsCalendars />
      </div>

      <h1 className='text-center text-xl font-bold text-primary'>ENTERPRISE OPERATIONS RESPONSIBILITIES</h1>

      <div className='grid grid-cols-4 gap-4'>
        <div>
          <EmsTreeView data={[operationManager]} />
        </div>
        <div>
          <EmsTreeView data={[operationManager]} />
        </div>
        <div>
          <EmsTreeView data={[operationManager]} />
        </div>
        <div>
          <EmsTreeView data={[operationManager]} />
        </div>
      </div>
    </>
  );
}
