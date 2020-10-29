/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent, useState } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

var test: any;
interface Country {
  name: string;
  code: string;
  capital: string;
  continent: {
    name: string;
  };
  language: {
    name: string;
  };
}

interface CountryData {
  countries: Country;
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

const List: FunctionComponent = () => {
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

  const { countries } = data;

  return (
    <div className='Country_list)'>
      <select
        defaultValue='EU'
        onChange={(event) => setValue(event.target.value)}
      >
        <option value='AF'>Africa</option>
        <option value='AN'>Antarctica</option>
        <option value='AS'>Asia</option>
        <option value='EU'>Europe</option>
        <option value='NA'>North america</option>
        <option value='OC'>Oceania</option>
        <option value='SA'>South america</option>
      </select>
      {countries.map((c: any, i: number) => (
        <div key={i}>
          <h3>
            {c.name} {c.emoji}
          </h3>
          <p className='capital'>
            Capital city is <b>{c.capital}</b>
          </p>
          <p className='language'>
            mluví se tam <b>{c.languages.name}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default List;
