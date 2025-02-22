import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition as HeadlessTransition } from '@headlessui/react';
import { Input } from './Input';
import NoResults from './NoResults';
import ResultItem from './ResultItem';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import useClickOutside from '../../../private/hooks/useClickOutside';
import type SearchProps from '../types/SearchProps';
import { SearchContext, SelectContext } from '../utils/context';

const SearchRoot = ({
  selected: selectedParent,
  onChangeSelected,
  onChangeSearch,
  onChangeOpen,
  children,
  isOpen,
  className,
  search,
}: SearchProps) => {
  const [ref, hasClickedOutside] = useClickOutside();
  const inputRef = useRef<MutableRefObject<HTMLInputElement>>(null);
  const [selected, setSelected] =
    typeof selectedParent === 'number' && onChangeSelected
      ? [selectedParent, onChangeSelected]
      : useState<number>(0);

  function handleChangeSelected(direction?: 'up' | 'down') {
    const items = document.querySelectorAll('.moon-search-list-item');

    let index = 0;
    let newIndex = 0;
    let newItem: Element;

    if (direction === 'down') {
      items.forEach((_, i) => {
        if (i === selected) {
          index = i;
        }
      });

      newIndex = index === items.length - 1 ? 0 : index + 1;
    } else if (direction === 'up') {
      items.forEach((_, i) => {
        if (i === selected) {
          index = i;
        }
      });

      newIndex = !index ? items.length - 1 : index - 1;
    } else {
      setSelected(0);
    }

    newItem = items[newIndex];

    if (newItem && typeof newIndex === 'number') {
      setSelected(newIndex);
      newItem.scrollIntoView({
        behavior: 'smooth',
        block: newIndex ? 'center' : 'end',
      });
    }
  }

  function handleSelect() {
    const items = document.querySelectorAll(
      '.moon-search-list-item'
    ) as NodeListOf<HTMLButtonElement | HTMLAnchorElement>;

    let index = 0;
    let item: HTMLAnchorElement | HTMLButtonElement;

    items.forEach((_, i) => {
      if (i === selected) {
        index = i;
      }
    });

    item = items[index];

    if (item) {
      item.click();

      if (
        item.attributes.getNamedItem('data-close-on-select')?.value === 'true'
      ) {
        onChangeOpen(false);
      }
    }
  }

  useEffect(() => {
    handleChangeSelected();
  }, [search]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === 'ArrowDown' ||
        (e.ctrlKey && e.key === 'n') ||
        (e.ctrlKey && e.key === 'j')
      ) {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected('down');
      } else if (
        e.key === 'ArrowUp' ||
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 'k')
      ) {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected('up');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleSelect();
      }
    },
    [handleChangeSelected, handleSelect]
  );

  React.useEffect(() => {
    if (hasClickedOutside) {
      onChangeOpen(false);
    }
  });

  const openSearch = useCallback(() => onChangeOpen(true), []);

  return (
    <div ref={ref} onKeyDown={onKeyDown} onClick={openSearch}>
      <div
        className={mergeClassnames(
          'relative w-full h-full bg-goku flex flex-col border border-beerus',
          isOpen ? 'rounded-t-moon-s-sm' : 'rounded-moon-s-sm',
          '[&_.moon-search-result]:top-10',
          '[&_.moon-search-transition>.moon-search-result]:top-0',
          className
        )}
      >
        <SearchContext.Provider
          value={{ search, onChangeOpen, onChangeSearch, inputRef, isOpen }}
        >
          <SelectContext.Provider value={{ selected }}>
            {children}
          </SelectContext.Provider>
        </SearchContext.Provider>
      </div>
    </div>
  );
};

const Transition = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen } = useContext(SearchContext);

  return (
    <HeadlessTransition
      show={isOpen}
      as="div"
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      className={mergeClassnames('moon-search-transition z-5', className)}
    >
      {children}
    </HeadlessTransition>
  );
};

const Result = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { isOpen } = useContext(SearchContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={mergeClassnames(
        'moon-search-result',
        'absolute w-full flex-1 focus:outline-none p-2 space-y-4 bg-goku shadow-moon-md ',
        isOpen ? 'rounded-b-moon-s-sm' : 'rounded-moon-s-sm',
        className
      )}
      tabIndex={-1}
      {...props}
    >
      {children}
    </div>
  );
};

const ResultHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    className={mergeClassnames(
      'text-bulma text-moon-14 font-medium px-2 py-1',
      className
    )}
    {...props}
  >
    {children}
  </h5>
);

const Search = Object.assign(SearchRoot, {
  Input,
  NoResults,
  Transition,
  Result,
  ResultItem,
  ResultHeading,
});

export default Search;
