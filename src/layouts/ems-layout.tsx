import { NavLinkModel } from '../models/nav-link.model';
import { EmsHeader } from '../components/header/ems-header';
import { EmsSubHeader } from '../components/sub-header/ems-sub-header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

export interface EmsLayoutProps {
  children: React.ReactNode;
  header1List?: NavLinkModel[];
  header2List?: NavLinkModel[];
  sidenavList?: NavLinkModel[];
}

export const EmsLayout = () => {
  // const { children, header1List, header2List } = props;
  return (
    <>
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
          { href: '/', label: 'STANDARD BUSINESS LINE' }
        ]}
      />
      <EmsSubHeader
        color='#ffffff'
        backgroundColor='#191277'
        leftLinks={[
          { href: '/', label: 'Refresh', icon: (<FontAwesomeIcon icon={faArrowsRotate} width={16} />) },
        ]}/>
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        {/* <header className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome to EMS</h1>
          <p className="mt-3 text-2xl">Enterprise Management System</p>
        </header> */}
        {/* {children} */}
      </main>
    </>
  );
};
