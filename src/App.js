import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, Container, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/navbar/Navbar';
import { getCityForecast, setCity } from './store/actions/forecastActions';
import { getCity, getMappedForecast, isLoading } from './store/selector';
import WeatherWidget from './components/weather-widget/WeatherWidget';
import Spinner from './components/Spinner';

const App = ({ getCityForecast, mappedForecastData, isLoading, setCity, city }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      fontSize: 14,
      h5: {
        fontWeight: 600
      }
    }
  });

  useEffect(() => {
    getCityForecast('jerusalem');
  }, []);

  const handleOnChange = city => {
    setCity(city);
    getCityForecast(city);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar city={city} onChange={handleOnChange}/>
      <Container maxWidth="sm">
        {
          isLoading ? <Spinner /> :
            <WeatherWidget
              config={{ location: city, unit: 'metric', locale: 'zh-tw' }}
              forecast={mappedForecastData}
            />
        }

      </Container>
    </ThemeProvider>
  );

};

const mapStateToProps = state => {
  return {
    city: getCity(state),
    mappedForecastData: getMappedForecast(state),
    isLoading: isLoading(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCityForecast: data => dispatch(getCityForecast(data)),
    setCity: data => dispatch(setCity(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
