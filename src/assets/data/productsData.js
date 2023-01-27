import img1 from '../pexels-antonius-natan-11835350.jpg';
import img2 from '../pexels-fauxels-3183197.jpg';
import img3 from '../pexels-fauxels-3184418.jpg';

export const productsTabs = [
  {
    id: 1,
    tabTitle: 'Edit',
    content:
      'Update the attributes of your product item.  Name, Product Description, Global Product Category Code, and Image are required attributes.  Global Trade Identification Number (GTIN) & Product Type cannot be edited.  If you wish to change either of these, you must create a new product with an entirely new GTIN',
    contentHeading: '',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Publish',
    content:
      'Select a customer/subscriber who wishes to start receiving product data.  Click on Publish at the confirmation window to complete the action.',
    contentHeading: '',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Deactivate',
    content:
      'Choose this action to render the catalog item inactive.  You can reactivate the product if you wish to make it available to customers again in the future.',
    contentHeading: '',
    imgUrl: img3,
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
        accessor: row => new Date(row.dateAdded).toLocaleDateString(),
      },
      {
        Header: 'Modified',
        accessor: row => {
          if (row.dateModified) {
            return new Date(row.dateModified).toLocaleDateString();
          } else {
            return '';
          }
        },
      },
      {
        Header: 'Published',
        accessor: row => {
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
        accessor: row => new Date(row.dateAdded).toLocaleDateString(),
      },
      {
        Header: 'Date Inactive',
        accessor: row => {
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
