import type AccordionSizes from '../types/AccordionSizes';

const getPadding = (isContentInside?: boolean, size?: AccordionSizes) => {
  if (isContentInside) {
    switch (size) {
      case 'xl':
        return 'p-4';
      case 'lg':
        return 'p-3';
      case 'sm':
        return 'p-2';
      default:
        return 'py-2 ps-3 pe-2';
    }
  }
  return '';
};

export default getPadding;
