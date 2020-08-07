import React from 'react';
import moment from 'moment';
import iconCodeMapping from '../../WeatherIcon';
import style from './MiniWeatherCard.module.scss';

const MiniWeatherCard = ({ onClick, forecastList, isSelected, unit, locale }) => {
  if (forecastList !== undefined && forecastList.length > 0) {
    const first = forecastList[0];
    const maxAndMin = forecastList.reduce(
      (acc, current) => {
        if (current.temp_max > acc.max) {
          acc.max = current.temp_max;
        }
        if (current.temp_min < acc.min) {
          acc.min = current.temp_min;
        }
        return acc;
      },
      { max: Number.MIN_VALUE, min: Number.MAX_VALUE },
    );
    return (
      <div className={style['mini-weather-card-wrapper']}>
        <div className='container' onClick={onClick} isSelected={isSelected}>
          <div className='text'>
            {moment
              .unix(first.dt)
              .locale(locale)
              .format('dddd')}
          </div>
          <img className='icon' src={iconCodeMapping[first.icon]} />
          <div className='text'>
            {Math.round(maxAndMin.max * 10) / 10}&deg;{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className='text'>
            {Math.round(maxAndMin.min * 10) / 10}&deg;{unit === 'metric' ? 'C' : 'F'}
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

MiniWeatherCard.defaultProps = {
  onClick: () => {},
  isSelected: false,
  unit: 'metric',
  locale: 'zh-tw',
};


export default MiniWeatherCard;

// const Root = styled.div`
//   min-width: 20%;
// `;

// const Container = styled.div`
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   padding: 0.5rem 0.5rem;
//   background: ${props => (props.isSelected ? '#F9F9F9' : 'inherit')};
//   border: ${props => (props.isSelected ? '1px solid #DDDDDD' : 'none')};
// `;

// const Text = styled.div`
//   text-align: center;
//   line-height: normal;
//   padding: 0.5rem 0rem;
// `;

// const Icon = styled.img`
//   align-self: center;
//   line-height: normal;
//   width: 3rem;
//   height: 3rem;
// `;
