import { faArrowsRotate, faUserPlus, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomizeIcon, PersonIcon } from '../../components/icons/icons';
import { EmsLayout } from '../../layouts/ems-layout';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <EmsLayout
      header1List={[
        { href: '/', label: 'SYSTEM MAINTENANCE' },
        { href: '/', label: 'OPERATIONS MANAGEMENT' },
        { href: '/', label: 'STANDARD BUSINESS ENTITY' },
        { href: '/', label: 'STANDARD BUSINESS TRANSACTION' },
        { href: '/', label: 'STANDARD BUSINESS STEP' },
        { href: '/', label: 'STANDARD BUSINESS TASK' },
        { href: '/', label: 'STANDARD BUSINESS ACTIVITY' },
        { href: '/', label: 'STANDARD BUSINESS PROCESS' },
        { href: '/', label: 'STANDARD BUSINESS SYSTEM' },
        { href: '/', label: 'STANDARD BUSINESS OPERATIONS' },
        { href: '/', label: 'STANDARD BUSINESS FUNTION' },
        { href: '/', label: 'STANDARD BUSINESS LINE' }
      ]}
      header2List={{
        left: [
          { href: '/', label: 'Refresh', icon: <FontAwesomeIcon icon={faArrowsRotate} width={16} /> },
          { href: '/', label: 'Customize', icon: <CustomizeIcon width={16} /> }
        ],
        centers: [
          { href: '/', label: 'PERSON NAME', icon: <PersonIcon width={16} /> },
          { href: '/', label: 'VECTOR', icon: <FontAwesomeIcon icon={faUserPlus} width={16} /> },
          { href: '/', label: 'POSITION', icon: <FontAwesomeIcon icon={faSitemap} width={16} /> },
          { href: '/', label: 'Operations Manager' },
          { href: '/', label: 'Operations Consultant' },
          { href: '/', label: 'Operations Analyst' }
        ]
      }}
      sidenavList={[
        { href: '/', label: 'System Maintenance' },
        { href: '/', label: 'Operations Management' },
        { href: '/', label: 'Standard Business Entity' },
        { href: '/', label: 'Standard Business Process' },
        { href: '/', label: 'Standard Business System' },
        { href: '/', label: 'Logout' }
      ]}>
      {children}
    </EmsLayout>
  );
}
