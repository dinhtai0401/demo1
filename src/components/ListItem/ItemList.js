import React from 'react';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


const ItemList = props => {

    if (props.numberVerify === null)
    {
      alert('We cant find your code');
      return(
        <React.Fragment><Redirect to='/code' /></React.Fragment>)
    }
    else{

      return (

          <div>
            {
              props.item.map(i => <ItemDetail {...i} key={i.id} />)
            }
          </div>
      )
    }
}






export default ItemList;


/*return (

    <div>
      {
        props.item.map(i => <ItemDetail {...i} key={i.id} />)
      }
    </div>
)*/
