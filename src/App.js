import React, { useEffect, useState } from 'react';
import PageLayout from './components/PageLayout';
import style from './css/App.scss';
import {connect} from 'react-redux';
import {fetchItems} from './store/actions/registerActions';
import { createMuiTheme, Container, ThemeProvider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from "./components/Navbar";

const App = ({fetchItems}) => {

  const [city, setCity] = useState('Jerusalem');
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getWeather(city)
      .then(weather => {
        setCurrentWeather(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [city, error]);

  useEffect(() => {
    getForecast(city)
      .then(data => {
        setForecast(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [city, error]);

  const handleCityChange = city => {
    setCity(city);
  };

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

  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="sm">
          <Weather
            city={city}
            currentWeather={currentWeather}
            forecast={forecast}
            onCityChange={handleCityChange}
            error={error}
          />
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <CircularProgress color={error ? 'secondary' : 'primary'} />
        {error ? <p>{error}</p> : ''}
      </div>
    );
  }

  // return (
  //     <div className={style['app-wrapper']}>
  //       <PageLayout>
  //         <div className="main-page-content">
  //           Main
  //         </div>
  //       </PageLayout>
  //     </div>
  // );
};

const mapStateToProps = state => {
    return {
        data: state.currData.data,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchItems: () => dispatch(fetchItems())
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
