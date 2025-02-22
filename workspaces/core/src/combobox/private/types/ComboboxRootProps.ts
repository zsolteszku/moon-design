import InputValue from './InputValue';
import Placement from './Placement';
import Size from './Size';

export interface ComboboxRootProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'children' | 'ref'
  > {
  value?: InputValue;
  displayValue?: (value: InputValue) => string;
  onChange(value: unknown): void;
  onQueryChange(value: string): void;
  onClear?: (index?: number | string) => void;
  isError?: boolean;
  disabled?: boolean;
  size?: Size;
  className?: string;
  multiple?: boolean;
  nullable?: boolean;
  position?: Placement;
  children?: React.ReactNode | ((data: { open?: boolean }) => React.ReactNode);
  placeholder?: string;
  ref?: React.Ref<HTMLElement>;
}
