import './ems-header.css';
import clsx from 'clsx';
import Link from 'next/link';
import { NavLinkModel } from '../../models/nav-link.model';
import { EmsConstant } from '../../ultility/ems-constant';

export interface EmsHeaderProps {
  color?: string;
  backgroundColor?: string;
  logoUrl?: string;
  navLinks?: NavLinkModel[];
}

export const EmsHeader = (props: EmsHeaderProps) => {
  const { color, backgroundColor, logoUrl, navLinks } = props;

  return (
    <header style={{ color: color, backgroundColor: backgroundColor }}>
      <nav aria-label='Global' className='w-full flex items-center justify-between'>
        <div className='flex py-2 px-1'>
          <Link href='/' className='-m-1.5 p-1.5' style={{ width: EmsConstant.EmsLayout.sideNavWidth }}>
            <img src={logoUrl} alt='' className='w-full' />
          </Link>
        </div>
        <div className='flex ms-2 pr-1'>
          <div className='ems-header-actions flex items-center justify-start'>
            {navLinks &&
              navLinks.length > 0 &&
              navLinks.map((navLink, index) => (
                <Link href={navLink.href} key={index} className={clsx(
                  'text-center text-xs font-bold p-1.5',
                  'hover:bg-secondary-700 hover:text-white',
                  'transition-colors duration-300',
                  )}>
                  {navLink.label.toUpperCase()}
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
