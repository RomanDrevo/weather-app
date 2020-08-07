import React, {useEffect} from 'react';
import PageLayout from './components/PageLayout';
import style from './css/App.scss';
import {connect} from 'react-redux';
import {fetchItems} from './store/actions/registerActions';
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";



const App = ({fetchItems}) => {

    useEffect(() => {
        fetchItems();
    }, []);

  return (
      <div className={style['app-wrapper']}>
        <PageLayout>
          <div className="main-page-content">
            Main
          </div>
        </PageLayout>
      </div>
  );
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
