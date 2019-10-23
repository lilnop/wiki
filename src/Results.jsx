import React from 'react';

const Results = (props) => {

    return(
        <div style={{elevation:10,justifyContent:'center',flexDirection:'row'}}>
            <h2>{props.title }</h2>
            <p>{props.description}</p>
            <p>{props.link}</p>          
        </div>
    )
}

export default Results;
