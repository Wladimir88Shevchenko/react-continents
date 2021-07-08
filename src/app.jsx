import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Continent from './components/continent/continent';
import MyContext from './services/context';
import Loader from './components/loader';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
{
  countries {
    name
    code
    continent{
      name
    }
  }
}
`;

// create a component that renders a select input for coutries
const App = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return <p>{error ? error.message : <Loader />}</p>;
  }

  const continents = data.countries.map(
    (country) => (country.continent.name));

  const unicalArr = new Set();
  continents.forEach(element => {
    unicalArr.add(element);
  });

  const createContinentWithCountryes = (cont, arr) => {
    const constWithCountry = [];
    arr.forEach((country) => {
      if (country.continent.name === cont) {
        constWithCountry.push(country);
      }
    });
    return (constWithCountry);
  }

  const continentCountry = {};

  [...unicalArr].forEach((continent) => continentCountry[continent] = createContinentWithCountryes(continent, data.countries));


  return (
    <div className="container">
      <MyContext.Provider value={continentCountry}>
        <ul className="collection">
          {
            [...unicalArr].map(
              (continent) => (<Continent key={continent} name={continent} />)
            )
          }
        </ul>
      </MyContext.Provider>
    </div>
  )
}

export default App;