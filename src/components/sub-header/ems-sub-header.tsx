'use client';
import { useEffect, useState } from 'react';
import { NavLinkModel } from '../../models/nav-link.model';
import moment from 'moment';
import React from 'react';

export interface EmsSubHeaderProps {
  color?: string;
  backgroundColor?: string;
  logoUrl?: string;
  leftLinks?: NavLinkModel[];
  centerLinks?: NavLinkModel[];
  rightLinks?: NavLinkModel[];
}

export const EmsSubHeader = (props: EmsSubHeaderProps) => {
  const { color, backgroundColor, leftLinks, centerLinks, rightLinks } = props;

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
          style={{ width: '145px', backgroundColor: backgroundColor }}>
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
            <p className='inline-block my-auto ms-2'>{currentTime.format('HH:mm:ss')}</p>
          </div>
        </div>
        <div className='flex items-cener justify-between'>
          <div className='py-1' style={{ backgroundColor: backgroundColor }}>
            {leftLinks &&
              leftLinks.length > 0 &&
              leftLinks.map((navLink, index) => (
                <div key={index} className='flex items-center justify-center p-1'>
                  {navLink.icon && (
                    <>
                      {typeof navLink.icon === 'string' ? (
                        <img src={navLink.icon} alt='' className='w-5 h-5' />
                      ) : (
                        React.isValidElement(navLink.icon) && navLink.icon
                      )}
                      <p className='text-xs'>{navLink.label}</p>
                    </>
                  )}
                  {!navLink.icon && (
                    <p>
                      <small>{navLink.label}</small>
                    </p>
                  )}
                </div>
              ))}
          </div>
          <div style={{ backgroundColor: backgroundColor }}></div>
          <div style={{ backgroundColor: backgroundColor }}></div>
        </div>
      </nav>
    </header>
  );
};
