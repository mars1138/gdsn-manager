export const navMenuData = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'My Products',
    url: '/products',
    submenu: [
      {
        title: 'Active Products',
        url: '/products/active',
        submenu: [
          {
            title: 'Published Items',
            url: '/products/published',
          },
        ],
      },
      {
        title: 'Add Product',
        url: '/products/add',
      },
      {
        title: 'Inactive Products',
        url: '/products/inactive',
      },
    ],
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Resources',
    url: '/resources',
    submenu: [
      {
        title: 'Webinars',
        url: '/webinars',
      },
      {
        title: 'Training',
        url: '/training',
      },
      {
        title: 'Support',
        url: '/support',
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
