import React from 'react';

import ProductsTable from './ProductsTable';
import TabComponent from '../shared/components/TabComponent/TabComponent';
// import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

// import classes from './ActiveProducts.module.css';

import { catalog } from '../assets/data/test-catalog';
import { productsTabs, activeColumns } from '../assets/data/productsData';

const ActiveProducts = () => {
  // console.log(catalog);

  // const productsList = [];

  // catalog.forEach((item, index) => {
  //   console.log(item);

  //   productsList.push(
  //     <li key={index}>
  //       <ProductItem
  //         index={index}
  //         name={item.name}
  //         gtin={item.gtin}
  //         description={item.description}
  //         image={item.image}
  //       />
  //     </li>
  //   );
  // });

  // console.log(productsList);

  return (
    <React.Fragment>
      <Section>
        <h1>Active Products</h1>
        <ProductsTable columns={activeColumns} data={catalog} />
      </Section>
      <Section>
        <TabComponent>{productsTabs}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ActiveProducts;
