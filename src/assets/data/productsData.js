import img1 from '../pexels-antonius-natan-11835350.jpg';
import img2 from '../pexels-fauxels-3183197.jpg';
import img3 from '../pexels-fauxels-3184418.jpg';
import img4 from '../pexels-tiger-lily-4483942.jpg';

export const productsTabs = [
  {
    id: 1,
    tabTitle: 'Products 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Products 2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Products 3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Products 4',
    content:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

export const activeColumns = [
  {
    Header: ' ',
    columns: [
      {
        Header: 'Index',
        accessor: undefined,
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
      {
        Header: 'GTIN',
        accessor: 'gtin',
      },
      {
        Header: 'Name',
        accessor: 'name',
        width: '25%',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Created',
        accessor: (row) => new Date(row.dateAdded).toLocaleDateString(),
      },
      {
        Header: 'Modified',
        accessor: (row) => {
          if (row.dateModified) {
            return new Date(row.dateModified).toLocaleDateString();
          } else {
            return '';
          }
        },
      },
      {
        Header: 'Published',
        accessor: (row) => {
          if (row.datePublished) {
            return new Date(row.datePublished).toLocaleDateString();
          } else {
            return '';
          }
        },
      },
      {
        Header: 'Actions',
        accessor: undefined,
        width: '20%',
      },
    ],
  },
];

export const inactiveColumns = [
  {
    Header: ' ',
    columns: [
      {
        Header: 'Index',
        accessor: undefined,
      },
      {
        Header: 'GTIN',
        accessor: 'gtin',
      },
      {
        Header: 'Name',
        accessor: 'name',
        width: '25%',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Created',
        accessor: (row) => new Date(row.dateAdded).toLocaleDateString(),
      },
      {
        Header: 'Date Inactive',
        accessor: (row) => {
          if (row.dateInactive) {
            return new Date(row.dateInactive).toLocaleDateString();
          } else {
            return '';
          }
        },
      },
      {
        Header: 'Actions',
        accessor: undefined,
        width: '20%',
      },
    ],
  },
];
