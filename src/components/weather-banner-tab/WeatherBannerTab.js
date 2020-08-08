import 'react-tabs/style/react-tabs.css';
import 'rc-slider/assets/index.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import WeatherBanner from '../weather-banner/WeatherBanner';
import style from './WeatherBannerTab.module.scss';
import { getMarks } from '../../utils/helpers';

const { Handle } = Slider;

const WeatherBannerTab = ({ location, forecastOfDay, locale, unit }) => {

  const [marks, setMarks] = useState(getMarks(forecastOfDay, locale));
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(()=> {
    setMarks(getMarks(forecastOfDay, locale));
  }, [forecastOfDay]);

  const renderTabPanel = (item, unit) => {
    return (
      <TabPanel key={`tp${item.dt}`}>
        <WeatherBanner data={item} unit={unit}/>
      </TabPanel>
    );
  };

  const renderTab = (item, locale) => {
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
    return (<div/>);
  };

  const handle = (props) => {
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
  };

  const onSlided = (e) => {
    setTabIndex(e);
  };

  return (
    <div className={style['weather-banner-tab']}>
      <div className='location-text'>{location}</div>
      <Tabs selectedIndex={tabIndex} onSelect={false}>
        {forecastOfDay.map(item => renderTabPanel(item, unit))}
        <TabList style={{ display: 'none' }}>
          {forecastOfDay.map(item => renderTab(item))}
        </TabList>
      </Tabs>
      <div className='tab-container'>
        <Slider
          min={0}
          max={forecastOfDay.length - 1}
          value={tabIndex}
          handle={handle}
          onChange={e => onSlided(e)}
          marks={marks}
        />
      </div>
    </div>
  );

};

export default WeatherBannerTab;

