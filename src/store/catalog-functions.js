import { catalogActions } from './catalog-slice';

export const fetchCatalog = (userId, userToken) => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/api/products/user/${userId}`,
        {
          method: 'GET',
          body: null,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
        },
      );

      if (!response.ok) throw new Error('Could not fetch product catalog');

      const data = await response.json();

      return data;
    };

    try {
      const catalogData = await fetchData();

      dispatch(
        catalogActions.replaceCatalog({
          products: [...catalogData.products] || [],
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// export const sendCatalogData = catalog => {
//   return async dispatch => {
//     /// show notification sending...

//     const sendCatalog = async () => {
//       const response = await fetch('https://GGGGGGGGGGGGGGGGGGGGGGGG', {
//         method: 'PUT',
//         body: JSON.stringify({
//           products: catalog.products,
//         }),
//       });

//       if (!response.ok) throw new Error('Sending catalog data failed');
//     };

//     try {
//       await sendCatalog();

//       /// show notification that data sent successfully
//     } catch (err) {
//       /// show notification taht send data failed
//     }
//   };
// };
