import React from 'react'
import Item from './Item';
const CardList = ({list, onCardClickHandler}) => {
    return (
        <React.Fragment>
            {list.map((item, index) => (<Item key={index} item={item} onCardClickHandler={onCardClickHandler}/>))}
       </React.Fragment>
    )
}

export default CardList;