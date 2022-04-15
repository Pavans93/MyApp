import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'All Products',
    url: '/home',
    icon: 'fab fa-product-hunt',
  },
  {
    name: 'Mobiles',
    url: '/mobile',
    icon: 'fa fa-mobile',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Laptops',
    url: '/laptop',
    icon: 'fa fa-laptop',
  },
  {
    name: 'Cameras',
    url: '/camera',
    icon: 'fa fa-camera',
  },
  {
    name: 'Watches',
    url: '/watch',
    icon: 'fa fa-clock-o',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Logout',
    icon: 'fa fa-sign-out',
    url: '/theme/typography',
    // class: 'fixed-bottom'
  },
];
