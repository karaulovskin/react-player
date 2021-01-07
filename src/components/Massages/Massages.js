import React from 'react';

const Massages = () => {

    const data = [
        {massage: 'Massages 1'},
        {massage: 'Massages 2'},
        {massage: 'Massages 3'}
    ]

    const massages = data
        .map( massage => <li>{ massage.massage }</li> );

    return (
        <div>
            <ul>
                {massages}
            </ul>
        </div>
    )
}

export default Massages;
