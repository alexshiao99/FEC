import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
const AxiosHelper = require('./AxiosHelper');
import { RelatedRectangle } from './StyledComps/RelatedStyle.js';

const Related = ({ }) => {

  const {currentProd} = useContext(currentProducts);

  let [related, setRelated] = useState([]);
  useEffect(() => {
    if (currentProd.id) {
      AxiosHelper.getRelated(currentProd.id)
      .then((data) => setRelated(data.data))
      .catch((err) => console.error(err));
    }
  }, [currentProd])

  return (
    <RelatedRectangle>
      <h2>Customers Also Liked:</h2>
      <RelatedList related={related} />
      <h2>Your Outfit</h2>
      <OutfitList />
    </RelatedRectangle>
  )
}

export default Related;
