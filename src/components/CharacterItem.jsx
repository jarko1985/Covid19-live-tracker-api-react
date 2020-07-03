import React from 'react';
import who from '../img/who.jpg';
const CharacterItem = (props) => {
  const { item, flags } = props;
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h2
            style={{
              textAlign: 'center',
              backgroundColor: 'black',
              padding: '5px',
            }}
          >
            {item.Country}
          </h2>
          <img src={who} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.Country}</h1>
          <ul>
            <li>
              <strong style={{ color: 'orange' }}>New Confirmed:</strong>{' '}
              {item.NewConfirmed}
            </li>
            <li>
              <strong style={{ color: 'red' }}>New Deaths</strong>{' '}
              {item.NewDeaths}
            </li>
            <li>
              <strong style={{ color: 'orange' }}>Total Confirmed:</strong>{' '}
              {item.TotalConfirmed}
            </li>
            <li>
              <strong style={{ color: 'green' }}>Total Recovered: </strong>
              {item.TotalRecovered}
            </li>
            <li>
              <strong style={{ color: 'red' }}>Total Deaths: </strong>
              {item.TotalDeaths}
            </li>
            <li>
              <strong>Last Updated: </strong>
              {item.Date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
