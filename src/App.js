import React, { useState } from 'react';
import { fetchCoctail, fetchCoctailRandom } from './services/fetchCoctail';
import './App.css';

function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();

    fetchCoctail(query).then(
      coctailResults => {
        setResults(coctailResults);
      }
    );
  }
  const onSubmitLucky = (event) => {
    event.preventDefault();

    fetchCoctailRandom(query).then(
      coctailResults => {
        setResults(coctailResults);
      }
    );
  }

  const onChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div className="container">
      {/* <SearchCoctail onSubmit={onSubmit} query={query} onChange={onChange} onSubmitLucky={onSubmitLucky}/> */}
      <SearchCoctail {...{ onSubmit, query, onChange, onSubmitLucky }} />
      <ResultCoctail results={results} />
    </div>
  );
}

function SearchCoctail({ onSubmit, query, onChange, onSubmitLucky }) {
  return (
    <form className="input-group search-form">

      <input
        type="text"
        value={query}
        onChange={onChange}
      />

      <div className="input-group-append" role="group" aria-label="Basic example">
        <button onClick={onSubmit} className="btn btn-primary ">Search</button>
        <button onClick={onSubmitLucky} className="btn btn-secondary"> I am lucky!</button>
      </div>
    </form>
  )
}


function ResultCoctail({ results }) {

  if (!results) {
    return null;
  }
  const listMarkUp = results.map((drink) =>
    <div key={drink.strDrink} className="card">
      <img src={drink.strDrinkThumb} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{drink.strDrink}:</h5>
        <p className="card-text">{drink.strInstructions}</p>
      </div>
    </div>
  )
  return (
    <div className="parent-body">
      {listMarkUp}
    </div>
  );
}



export default App;
