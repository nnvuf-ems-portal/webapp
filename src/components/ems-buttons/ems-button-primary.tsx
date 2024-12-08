import { Button } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';
import { EmsButtonProps } from './ems-button-props';

export const EmsButtonPrimary = (props: EmsButtonProps) => {
  const { children, onClick } = props;
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          type={props.type || 'button'}
          className={clsx(
            'rounded text-white',
            active && 'bg-primary-700',
            !active && hover && 'bg-primary-500',
            !active && !hover && 'bg-primary',
            props.className
          )}
          onClick={onClick}>
          {children}
        </button>
      )}
    </Button>
  );
};

export const EmsButtonOutlinePrimary = (props: EmsButtonProps) => {
  const { children, onClick } = props;
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          type={props.type || 'button'}
          className={clsx(
            'rounded text-primary border border-primary',
            active && 'bg-white-700',
            !active && hover && 'bg-white-500',
            !active && !hover && 'bg-white'
          )}
          onClick={onClick}>
          {children}
        </button>
      )}
    </Button>
  );
};
