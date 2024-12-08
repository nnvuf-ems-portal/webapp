import { NavLinkModel } from '../models/nav-link.model';
import { EmsHeader } from '../components/header/ems-header';
import { EmsSubHeader } from '../components/sub-header/ems-sub-header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faSitemap, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { CustomizeIcon, PersonIcon } from '../components/icons/icons';
import { EmsSideNav } from '../components/side-nav/ems-side-nav';
import { EmsCalendars } from '../components/calendars/ems-calendars';

export interface EmsLayoutProps {
  children: React.ReactNode;
  header1List?: NavLinkModel[];
  header2List?: NavLinkModel[];
  sidenavList?: NavLinkModel[];
}

export const EmsLayout = () => {
  // const { children, header1List, header2List } = props;
  return (
    <div className='flex flex-col w-screen h-screen'>
      <EmsHeader
        color='#ffffff'
        backgroundColor='#3b424f'
        logoUrl='/ems-logo.jpeg'
        navLinks={[
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
          { href: '/', label: 'STANDARD BUSINESS LINE' },
        ]}
      />
      <EmsSubHeader
        color='#ffffff'
        backgroundColor='#191277'
        leftLinks={[
          { href: '/', label: 'Refresh', icon: <FontAwesomeIcon icon={faArrowsRotate} width={16} /> },
          { href: '/', label: 'Customize', icon: <CustomizeIcon width={16} /> },
        ]}
        centerLinks={[
          { href: '/', label: 'PERSON NAME', icon: <PersonIcon width={16} /> },
          { href: '/', label: 'VECTOR', icon: <FontAwesomeIcon icon={faUserPlus} width={16} /> },
          { href: '/', label: 'POSITION', icon: <FontAwesomeIcon icon={faSitemap} width={16} /> },
          { href: '/', label: 'Operations Manager' },
          { href: '/', label: 'Operations Consultant' },
          { href: '/', label: 'Operations Analyst' },
        ]}
      />
      <main className='flex flex-1 flex-row items-center justify-stretch h-auto p-0'>
        <EmsSideNav
          backgroundColor='#3b424e'
         links={[
          { href: '/', label: 'System Maintenance' },
          { href: '/', label: 'Operations Management' },
          { href: '/', label: 'Standard Business Entity' },
          { href: '/', label: 'Standard Business Process' },
          { href: '/', label: 'Standard Business System' },
          { href: '/', label: 'Logout' },
        ]}/>
        <div className='flex flex-1 flex-col items-start justify-start w-full h-full bg-gray-100'>
          <EmsCalendars />
        </div>
      </main>
    </div>
  );
};
