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
        url: '/active-products',
        submenu: [
          {
            title: 'Published Items',
            url: '/published-items',
          },
        ],
      },
      {
        title: 'Add Product',
        url: '/add-product',
      },
      {
        title: 'Deleted Products',
        url: '/deleted-products',
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
