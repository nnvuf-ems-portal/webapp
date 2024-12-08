import { NavLinkModel } from '../../models/nav-link.model';
import { EmsConstant } from '../../ultility/ems-constant';

export interface EmsSideNavProps {
  backgroundColor?: string;
  links: NavLinkModel[];
}

export const EmsSideNav = ({ backgroundColor, links }: EmsSideNavProps) => {
  return (
    <nav
      className='flex flex-col items-center justify-start w-64 h-full'
      style={{ backgroundColor: backgroundColor, width: EmsConstant.EmsLayout.sideNavWidth }}>
      <div className='flex flex-col items-center justify-start w-full h-full' style={{ backgroundColor: backgroundColor }}>
        <ul className='flex flex-col items-center justify-start w-full h-full'>
          {links.map((link, index) => (
            <li key={index} className='flex items-center justify-start w-full h-16 border-t first:border-0'>
              <a href={link.href} className='flex items-center justify-start w-full h-full px-1'>
                {link.icon}
                <span className='ms-2 text-white'>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
