import React from 'react';
import moment from 'moment';
import WeatherBannerTab from '../weather-banner-tab/WeatherBannerTab';
import MiniWeatherCard from '../mini-weather-card/MiniWeatherCard';
import style from './WeatherWidget.module.scss';

class WeatherWidget extends React.Component {

  constructor(props) {
    super(props);
    const { forecast } = props;
    if (forecast) {
      let firstMomentOfDay;
      let forecastOfDay = [];
      const forecastOfDayList = [];
      forecast.forEach((item, index) => {
        if (firstMomentOfDay === undefined) {
          firstMomentOfDay = moment.unix(item.dt);
          forecast[index].moment = firstMomentOfDay;
          forecastOfDay.push(item);
        } else {
          const currentMoment = moment.unix(item.dt);
          forecast[index].moment = currentMoment;
          if (firstMomentOfDay.isSame(currentMoment, 'day')) {
            forecastOfDay.push(item);
          } else {
            forecastOfDayList.push(forecastOfDay);
            forecastOfDay = [];
            forecastOfDay.push(item);
            firstMomentOfDay = currentMoment;
          }
        }
      });
      this.state = { forecastIdx: 0, forecastOfDayList };
    } else {
      this.state = {};
    }
  }

  renderEmpty() {
    return (
      <div>
        <h3>No forecast!? Check your props data!</h3>
      </div>
    );
  }

  render() {
    const { config, forecast } = this.props;
    if (!forecast) {
      return this.renderEmpty();
    }
    const forecastList = this.state.forecastOfDayList;
    return (
      <div className={style['weather-widget-wrapper']}>
        <WeatherBannerTab
          className=""
          location={config.location}
          forecastOfDay={forecastList[this.state.forecastIdx]}
          unit={config.unit}
          locale={config.locale}
        />
        <div className='next-container'>
          <MiniWeatherCard
            onClick={() => this.setState({ forecastIdx: 0 })}
            forecastList={forecastList[0]}
            isSelected={this.state.forecastIdx === 0}
            unit={config.unit}
            locale={config.locale}
          />
          <MiniWeatherCard
            onClick={() => this.setState({ forecastIdx: 1 })}
            forecastList={forecastList[1]}
            isSelected={this.state.forecastIdx === 1}
            unit={config.unit}
            locale={config.locale}
          />
          <MiniWeatherCard
            onClick={() => this.setState({ forecastIdx: 2 })}
            forecastList={forecastList[2]}
            isSelected={this.state.forecastIdx === 2}
            unit={config.unit}
            locale={config.locale}
          />
          <MiniWeatherCard
            onClick={() => this.setState({ forecastIdx: 3 })}
            forecastList={forecastList[3]}
            isSelected={this.state.forecastIdx === 3}
            unit={config.unit}
            locale={config.locale}
          />
          <MiniWeatherCard
            onClick={() => this.setState({ forecastIdx: 4 })}
            forecastList={forecastList[4]}
            isSelected={this.state.forecastIdx === 4}
            unit={config.unit}
            locale={config.locale}
          />
        </div>
      </div>
    );
  }
}

// const ContentContainer = styled.div`
//   display: block;
//   margin: 10px 5px;
//   text-align: left;
//   border: 1px solid #dddddd;
//   box-shadow: 3px 3px 3px #aaaaaa;
//   padding: 1rem 1rem;
// `;

// const Next5Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 1rem;
//   justify-content: space-around;
// `;

export default WeatherWidget;
