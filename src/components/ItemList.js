import React from 'react';
import ItemDetail from './ItemDetail';
import {Link} from "react-router-dom"

const ItemList = props => {
  return (

      <div>
        <Link to={'/register'}>{<button>Form</button>}</Link>
        <Link to={'/login'}>{<button>Form</button>}</Link>
        {
          props.item.map(i => <ItemDetail {...i} key={i.id} />)
        }
      </div>



  )
}







export default ItemList;
