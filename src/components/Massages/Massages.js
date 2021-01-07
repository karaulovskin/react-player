import React from 'react';

const Massages = (props) => {

    const massages = props.massage
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
