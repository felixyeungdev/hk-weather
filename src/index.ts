import {
    DataTypes,
    IAPIParameters,
    IGet9DayWeatherForecastResult,
    IGetCurrentWeatherReportResult,
    IGetLocalWeatherForecastResult,
    IGetSpecialWeatherTipsResult,
    IGetWeatherWarningInformationResult,
    IGetWeatherWarningSummaryResult,
} from './interfaces';

const BASE_URL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php';

const fetchWrapper = async <T>(url: string) => {
    try {
        const response = await fetch(url);
        switch (response.status) {
            case 200: {
                const json = await response.json();
                return json as T;
            }

            case 429: {
                throw new Error('too many requests');
            }

            case 500: {
                throw new Error('internal server error');
            }

            default: {
                return null;
            }
        }
    } catch (error) {
        throw new Error(error);
    }
};

class Weather {
    static async getLocalWeatherForecast({ lang = 'en' }: IAPIParameters = {}) {
        const dataType = 'flw' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGetLocalWeatherForecastResult>(url);
    }

    static async get9DayWeatherForecast({ lang = 'en' }: IAPIParameters = {}) {
        const dataType = 'fnd' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGet9DayWeatherForecastResult>(url);
    }

    static async getCurrentWeatherReport({ lang = 'en' }: IAPIParameters = {}) {
        const dataType = 'rhrread' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGetCurrentWeatherReportResult>(url);
    }

    static async getWeatherWarningSummary({
        lang = 'en',
    }: IAPIParameters = {}) {
        const dataType = 'warnsum' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGetWeatherWarningSummaryResult>(url);
    }

    static async getWeatherWarningInformation({
        lang = 'en',
    }: IAPIParameters = {}) {
        const dataType = 'warningInfo' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGetWeatherWarningInformationResult>(url);
    }

    static async getSpecialWeatherTips({ lang = 'en' }: IAPIParameters = {}) {
        const dataType = 'swt' as DataTypes;
        const url = `${BASE_URL}?dataType=${dataType}&lang=${lang}';`;
        return await fetchWrapper<IGetSpecialWeatherTipsResult>(url);
    }
}

export { Weather };
