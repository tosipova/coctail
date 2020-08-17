import React, { useState } from 'react';
import fetchCoctail, { fetchCoctailRandom } from './services/FetchCoctail';

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
    <div className="App">
      {/* <SearchCoctail onSubmit={onSubmit} query={query} onChange={onChange} onSubmitLucky={onSubmitLucky}/> */}
      <SearchCoctail {...{ onSubmit, query, onChange, onSubmitLucky }} />
      <ResultCoctail results={results} />
    </div>
  );
}

function SearchCoctail({ onSubmit, query, onChange, onSubmitLucky }) {
  return (
    <form >
      <input
        type="text"
        value={query}
        onChange={onChange}
      />
      <button onClick={onSubmit}> Search</button>
      <button onClick={onSubmitLucky}> I am lucky!</button>
    </form>
  )
}


function ResultCoctail({ results }) {

  if (!results) {
    return null;
  }
  const listMarkUp = results.map((drink) =>
    <div>
      <div>{drink.strDrink}:</div>
      <div>{drink.strInstructions}</div>
    </div>
  )
  return (
    <div className="parent-body">
      {listMarkUp}
    </div>
  );
}



export default App;
