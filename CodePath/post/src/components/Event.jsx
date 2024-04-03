import React from 'react';

const Event = (prop) =>
{
    return (
        <td className={prop.color}><h5>{prop.event}</h5></td>
    )
}
export default Event;