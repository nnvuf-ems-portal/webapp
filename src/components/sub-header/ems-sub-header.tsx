'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { NavLinkModel } from '../../models/nav-link.model';
import { IsClientComponent } from '../is-client-component/is-client-component';
import { CalendarDayIcon } from '../icons/icons';
import { EmsConstant } from '../../ultility/ems-constant';

export interface EmsSubHeaderProps {
  color?: string;
  backgroundColor?: string;
  logoUrl?: string;
  leftLinks?: NavLinkModel[];
  centerLinks?: NavLinkModel[];
  rightLinks?: NavLinkModel[];
}

export const EmsSubHeader = (props: EmsSubHeaderProps) => {
  const { color, backgroundColor, leftLinks, centerLinks } = props;

  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ color: color, backgroundColor: '#d8d8d8' }}>
      <nav aria-label='Global' className='w-full flex items-center justify-stretch p-0'>
        {/* Display client clock here */}
        <div
          className='flex items-center justify-center text-xs font-bold p-1'
          style={{ width: EmsConstant.EmsLayout.sideNavWidth, backgroundColor: backgroundColor }}>
          <div className='flex items-center justify-center border-2 rounded-[5px] px-2 py-1 text-center'>
            <div className='inline-block border-2 rounded-full p-0'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                <path
                  fillRule='evenodd'
                  d='M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <IsClientComponent>
              <p className='inline-block my-auto ms-2'>{currentTime.format('HH:mm:ss')}</p>
            </IsClientComponent>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-between'>
          <div className='flex items-center justify-start h-[40px] py-1' style={{ backgroundColor: backgroundColor }}>
            {leftLinks &&
              leftLinks.length > 0 &&
              leftLinks.map((navLink, index) => (
                <div key={index} className='flex flex-col items-center justify-center px-1'>
                  {navLink.icon && (
                    <>
                      {typeof navLink.icon === 'string' ? (
                        <img src={navLink.icon} alt='' className='w-5 h-5' />
                      ) : (
                        React.isValidElement(navLink.icon) && navLink.icon
                      )}
                      <p className='text-xs'>{navLink.label.toUpperCase()}</p>
                    </>
                  )}
                  {!navLink.icon && <p className='text-sm'>{navLink.label.toUpperCase()}</p>}
                </div>
              ))}
          </div>
          <div className='flex items-center justify-center' style={{ backgroundColor: backgroundColor }}>
            {centerLinks &&
              centerLinks.length > 0 &&
              centerLinks.map((navLink, index) => (
                <div key={index} className='flex items-center justify-center h-[40px] p-1 border-l first:border-0'>
                  {navLink.icon && (
                    <>
                      {typeof navLink.icon === 'string' ? (
                        <img src={navLink.icon} alt='' className='w-5 h-5' />
                      ) : (
                        React.isValidElement(navLink.icon) && navLink.icon
                      )}
                      <p className='ms-1 text-xs'>{navLink.label.toUpperCase()}</p>
                    </>
                  )}
                  {!navLink.icon && <p className='text-sm'>{navLink.label.toUpperCase()}</p>}
                </div>
              ))}
          </div>
          <div className='flex items-center justify-end h-[40px] py-1 px-3' style={{ backgroundColor: backgroundColor }}>
            <CalendarDayIcon width={24} />
            <div className='ms-3'>
              <p className='text-xs font-bold'>System Date:</p>
              <p className='text-xs'>{currentTime.format('YYYY-MM-DD')}</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
