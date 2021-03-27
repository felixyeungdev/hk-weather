# Weather (Hong Kong)

Non-official Node.JS wrapper for [Weather](https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report)

Resources
- [Data Dictionary](https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf)

# Getting Started

## Install

```bash
npm install hk-weather
```

## Usage

```js

import { Weather } from 'hk-weather';
// or
const { Weather } = require('hk-weather');

const localWeatherForecast = await Weather.getLocalWeatherForecast();
const nineDayWeatherForecast = await Weather.get9DayWeatherForecast();
const currentWeatherReport = await Weather.getCurrentWeatherReport();
const weatherWarningSummary = await Weather.getWeatherWarningSummary();
const weatherWarningInformation = await Weather.getWeatherWarningInformation();
const specialWeatherTips = await Weather.getSpecialWeatherTips();

console.log({
    localWeatherForecast,
    nineDayWeatherForecast,
    currentWeatherReport,
    weatherWarningSummary,
    weatherWarningInformation,
    specialWeatherTips,
});

```