import { NavLinkModel } from '../models/nav-link.model';
import { EmsHeader } from '../components/ems-header/ems-header';
import { EmsSubHeader } from '../components/ems-sub-header/ems-sub-header';

import { EmsSideNav } from '../components/ems-side-nav/ems-side-nav';

export interface EmsLayoutProps {
  children: React.ReactNode;
  header1List?: NavLinkModel[];
  header2List?: { left?: NavLinkModel[]; centers?: NavLinkModel[] };
  sidenavList?: NavLinkModel[];
}

export const EmsLayout = (props: EmsLayoutProps) => {
  const { children, header1List, header2List, sidenavList } = props;
  return (
    <div className='flex flex-col w-screen h-screen'>
      <EmsHeader color='#ffffff' backgroundColor='#3b424f' logoUrl='/ems-logo.jpeg' navLinks={header1List} />
      <EmsSubHeader color='#ffffff' backgroundColor='#191277' leftLinks={header2List?.left} centerLinks={header2List?.centers} />
      <main className='flex flex-1 flex-row items-center justify-stretch h-auto p-0'>
        {sidenavList && sidenavList.length > 0 && <EmsSideNav backgroundColor='#3b424e' links={sidenavList} />}
        <div className='flex-1 h-full overflow-auto' style={{ backgroundColor: '#f0f0f0' }}>
          {children}
        </div>
      </main>
    </div>
  );
};
