import React from 'react';

function SearchCoctail(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                value={props.query}
                onChange={props.onChange}
            />
            <button onClick={props.onSubmit}> Search</button>
            <button> I am lucky!</button>
        </form>
    )
}                                                      

export default SearchCoctail;
