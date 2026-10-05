export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  comingSoon?: boolean;
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Laptops", href: "/laptops" },
  { label: "Resources", href: "#", comingSoon: true },
  { label: "Roadmaps", href: "#", comingSoon: true },
  { label: "Portfolio", href: "#", comingSoon: true },
];

export const footerNavItems: NavItem[] = [
  { label: "Laptops", href: "/laptops" },
  { label: "Resources", href: "#", comingSoon: true },
  { label: "Roadmaps", href: "#", comingSoon: true },
  { label: "Portfolio", href: "#", comingSoon: true },
];
