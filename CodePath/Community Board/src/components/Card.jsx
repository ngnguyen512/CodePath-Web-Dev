import React from 'react';

const Card = ({source, res_name, type_of_food}) => {
    return (
        <card>
            <img className='truck' src = {source} />
            <h3> {res_name}</h3>
            <h4>{type_of_food}</h4>
            <button className='view menu'>View Menu</button>
        </card>
    )
}

export default Card;