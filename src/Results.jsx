import React from 'react';

const Results = (props) => {

    return(
        <ul className="results">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <li><h2>{props.title }</h2></li>
                <li>{props.description}</li>
            </a>
        </ul>
    )
}

export default Results;
