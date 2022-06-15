export interface NavbarOption {
  title: string;
  onClick: () => void;
}

export interface NavbarProps {
  options: NavbarOption[];
}
