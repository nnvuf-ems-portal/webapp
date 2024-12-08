import { Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export interface EmsSelectProps {
  className?: string;
  onSelect: (value: string) => void;
  options?: string[] | { value: string; label: string }[];
}

export const EmsSelect = (props: EmsSelectProps) => {
  const { onSelect, options } = props;

  return (
    <div className='relative w-17'>
      <Select
        onChange={(e) => onSelect(e.target.value)}
        className={clsx(
          'block w-full appearance-none rounded border-none bg-white py-1 px-2 text-sm/6 text-primary',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          // Make the text of each option black on Windows
          '*:text-black',
          props.className
        )}>
        {options?.map((option) => {
          if (typeof option === 'string') {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          }
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      <ChevronDownIcon className='group pointer-events-none absolute top-2 right-2 size-4 fill-primary' aria-hidden='true' />
    </div>
  );
};
