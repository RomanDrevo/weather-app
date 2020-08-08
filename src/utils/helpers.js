import moment from 'moment';

export const mapForecast = forecast => {
  let firstMomentOfDay;
  let forecastOfDay = [];
  const forecastOfDayListArr = [];
  forecast.map((item, index) => {
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
        forecastOfDayListArr.push(forecastOfDay);
        forecastOfDay = [];
        forecastOfDay.push(item);
        firstMomentOfDay = currentMoment;
      }
    }
  });
  return forecastOfDayListArr;
};

export const getMarks = (forecastOfDay, locale) => {
  const marks = {};
  forecastOfDay.map((item, index) => {
    marks[index] = item.moment.locale(locale).format('a h:mm');
  });
  return marks;
};
