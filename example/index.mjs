import { Weather } from 'hk-weather';
import fetch from 'node-fetch';
global.fetch = fetch;

(async () => {
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
})();
