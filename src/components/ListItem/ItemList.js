import React from 'react';
import ItemDetail from './ItemDetail';
import {Link} from "react-router-dom"

const ItemList = props => {
  return (

      <div>
        {
          props.item.map(i => <ItemDetail {...i} key={i.id} />)
        }
      </div>
  )
}







export default ItemList;
