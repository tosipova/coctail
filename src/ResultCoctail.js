import React from 'react';

function ResultCoctail(props) {
    const {results} = props;

    if (!results) {
        return null;
    }

    return (
        <div className="parent-body">     
            <div className="city-body">{results}</div>
        </div>
    );  
}

export default ResultCoctail;