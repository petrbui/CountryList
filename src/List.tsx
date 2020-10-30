/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

interface Country {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  continent: {
    name: string;
  };
  languages: Languages[];
}
interface Languages {
  name: string;
  native: string;
}

interface CountryData {
  countries: Country[];
}
interface CountryVariable {
  code: string;
}

const COUNTRIES_QUERY = gql`
  query Counties($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      capital
      emoji
      phone
      currency
      native

      languages {
        name
        native
        code
      }
    }
  }
`;

function List() {
  const [continentCode, setValue] = useState("EU");
  const { data, loading } = useQuery<CountryData, CountryVariable>(
    COUNTRIES_QUERY,
    {
      variables: {
        code: continentCode,
      },
    }
  );

  if (loading) return <p>Načítání...</p>;

  return (
    <div className='Country_list'>
      <select
        defaultValue={continentCode}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value='AF'>Africa</option>
        <option value='AS'>Asia</option>
        <option value='EU'>Europe</option>
        <option value='NA'>North america</option>
        <option value='OC'>Oceania</option>
        <option value='SA'>South america</option>
      </select>
      {data?.countries.map((c) => (
        <div>
          <h3>
            {c.name}
            {c.emoji}
          </h3>
          <p className='capital'>
            The capital city is <b>{c.capital}</b>
          </p>
          <p className='language'>
            Native languages in country is <b>{c.languages[0].name}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default List;
