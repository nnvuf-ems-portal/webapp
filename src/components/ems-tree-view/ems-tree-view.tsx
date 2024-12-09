'use client';
import { Disclosure, DisclosureButton, DisclosurePanel, Input, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { TreeViewNode } from '../../models/tree-view.model';
import { EmsButtonSecondary } from '../ems-buttons/ems-button-secondary';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export interface EmsTreeViewProps {
  data: TreeViewNode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect?: (nodeId: string) => void;
}

export const EmsTreeView = (props: EmsTreeViewProps) => {
  const { data } = props;

  return (
    <>
      <div className='flex items-center justify-stretch mb-1'>
        <EmsButtonSecondary type='button' className='px-2 py-1 rounded-r-none' onClick={() => {}}>
          Search
        </EmsButtonSecondary>
        <Input
          className={clsx(
            'block flex-1 border-none p-1.5 text-sm/6 rounded-l-none rounded-r-md',
          )}
          type='text'
          name='Search'
          placeholder='Enter Business line name...'
        />
      </div>
      <div className='border border-secondary-100'>
        <EmsTree data={data} level={0} />
      </div>
    </>
  );
};

export const EmsTree = (props: EmsTreeViewProps & { level: number }) => {
  const { data, level } = props;
  const paddingLeft = 2 * level * 0.5 + 0.5;

  return (
    <>
      {data.map((node) => (
        <Disclosure as='div' key={node.id} style={{}} defaultOpen={true}>
          {({ open }) => (
            <div>
              <DisclosureButton
                className={clsx(
                  'group flex items-center justify-between w-full text-sm/8 text-left mb-1',
                  'transition-colors duration-300'
                )}
                style={{
                  paddingLeft: `${paddingLeft}rem`,
                  color: node.color,
                  backgroundColor: node.backgroundColor
                }}>
                <span>{node.label}</span>
                {node.children && <ChevronDownIcon className='size-5 group-data-[open]:rotate-180' />}
              </DisclosureButton>
              {node.children && (
                <Transition show={open} enter='transition ease-in duration-300' enterFrom='opacity-0' enterTo='opacity-100'>
                  <DisclosurePanel>
                    <EmsTree data={node.children} level={level + 1} />
                  </DisclosurePanel>
                </Transition>
              )}
            </div>
          )}
        </Disclosure>
      ))}
    </>
  );
};
