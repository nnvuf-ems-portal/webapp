export interface EmsButtonProps {
  children: string | React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick: () => void;
}
