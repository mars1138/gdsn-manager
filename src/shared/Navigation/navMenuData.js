export const navMenuData = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'My Products',
    url: '/products',
    submenu: [
      {
        title: 'Active Products',
        url: '/products',
        submenu: [
          {
            title: 'Published Items',
            url: '/products',
          },
        ],
      },
      {
        title: 'Deleted Products',
        url: '/products',
      },
    ],
  },
  {
    title: 'Solutions',
    url: '/solutions',
  },
  {
    title: 'Resources',
    url: '/resources',
    submenu: [
      {
        title: 'Resource1',
        url: '/plans',
      },
      {
        title: 'Resource1',
        url: '/plans',
      },
      {
        title: 'Resource1',
        url: '/plans',
      },
    ],
  },
  {
    title: 'Price Plans',
    url: '/plans',
  },
  {
    title: 'About',
    url: '/about',
  },
];
