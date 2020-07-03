import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import axios from 'axios';

const CharacterGrid = (props) => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v2/all',
      });
      setFlags(result.data);
    };
    fetchData();
  }, []);
  console.log(props);
  const { isLoading, items } = props;
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => {
        return (
          <CharacterItem key={item.CountryCode} item={item} flags={flags} />
        );
      })}
    </section>
  );
};

export default CharacterGrid;
