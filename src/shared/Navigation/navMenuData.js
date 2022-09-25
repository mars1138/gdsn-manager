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
        url: '/products/user',
        submenu: [
            {
                title: 'Published Items',
                url: '/products/user/published'
            }
        ]
      },
      {
        title: 'Deleted Products',
        url: '/products/user',
      },
    ],
  },
  {
    title: 'Solutions',
    url: '/',
  },
  {
    title: 'Resources',
    url: '/resources',
    submenu: [
      {
        title: 'Resource1',
        url: '/resources1',
      },
      {
        title: 'Resource1',
        url: '/resources2',
      },
      {
        title: 'Resource1',
        url: '/resources3',
      },
    ],
  },
  {
    title: 'Price Plans',
    url: '/plans',
  },
  {
    title: 'About',
    url: '/',
  },
];
