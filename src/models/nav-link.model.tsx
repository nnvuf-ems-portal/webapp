export interface NavLinkModel {
  href: string;
  label: string;
  icon?: string | React.ReactNode;
  children?: NavLinkModel[];
}