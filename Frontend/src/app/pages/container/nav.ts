import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'All Products',
    url: 'user/products',
    icon: 'fab fa-product-hunt',
  },
  {
    name: 'Mobiles',
    url: 'user/mobiles',
    icon: 'fa fa-mobile',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
  },
  {
    name: 'Laptops',
    url: 'user/laptops',
    icon: 'fa fa-laptop',
  },
  {
    name: 'Television',
    url: 'user/television',
    icon: 'fa fa-laptop',
  },
  {
    name: 'Cameras',
    url: 'user/cameras',
    icon: 'fa fa-camera',
  },
  {
    name: 'Watches',
    url: 'user/watches',
    icon: 'fa fa-clock-o',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }
];
