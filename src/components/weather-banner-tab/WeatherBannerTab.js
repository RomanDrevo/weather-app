import 'react-tabs/style/react-tabs.css';
import 'rc-slider/assets/index.css';
import React from 'react';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import WeatherBanner from '../weather-banner/WeatherBanner';
import style from './WeatherBannerTab.module.scss';

const {Handle} = Slider;

class WeatherBannerTab extends React.Component {
  constructor(props) {
    super(props);
    const { location, forecastOfDay, locale } = props;
    this.marks = {};
    forecastOfDay.forEach((item, index) => {
      this.marks[index] = item.moment.locale(locale).format('a h:mm');
    });
    this.state = { location, forecastOfDay, tabIndex: 0, locale };
  }

  componentWillReceiveProps(nextProps) {
    const { location, forecastOfDay, locale } = nextProps;
    this.marks = {};
    forecastOfDay.forEach((item, index) => {
      this.marks[index] = item.moment.locale(locale).format('a h:mm');
    });
    this.setState({ location, forecastOfDay, tabIndex: 0, locale });
  }

  renderTabPanel = (item, unit) => {
    return (
      <TabPanel key={`tp${item.dt}`}>
        <WeatherBanner data={item} unit={unit} />
      </TabPanel>
    );
  }

  renderTab = (item, locale) => {
    const localeRegion = locale || 'zh-tw';
    if (item) {
      return (
        <Tab key={`t${item.dt}`}>
          {moment
            .unix(item.dt)
            .locale(localeRegion)
            .format('a h:mm')}
        </Tab>
      );
    }
    return (<div />);
  }

  getMarks() {}

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  }

  onSlided(e) {
    this.setState({ tabIndex: e });
  }

  render() {
    const { location, forecastOfDay, tabIndex } = this.state;
    return (
      <div className={style['weather-banner-tab']}>
        <div className='location-text'>{location}</div>
        <Tabs selectedIndex={tabIndex} onSelect={false}>
          {forecastOfDay.map(item => this.renderTabPanel(item, this.props.unit),
          )}
          <TabList style={{ display: 'none' }}>
            {forecastOfDay.map(item => this.renderTab(item))}
          </TabList>
        </Tabs>
        <div className='tab-container'>
          <Slider
            min={0}
            max={forecastOfDay.length - 1}
            value={tabIndex}
            handle={this.handle}
            onChange={e => this.onSlided(e)}
            marks={this.marks}
          />
        </div>
      </div>
    );
  }
}

WeatherBannerTab.defaultProps = {
  unit: 'metric',
  locale: 'zh-tw',
};

export default WeatherBannerTab;

