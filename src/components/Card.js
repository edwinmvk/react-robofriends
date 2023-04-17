import React from 'react';

const Card= (props)=> {
    return(
        <div className= 'tc grow bg-light-green br4 pa2 ma3 dib bw2 shadow-5'>
            <img alt= 'robots' src= {`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;