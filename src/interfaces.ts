type Languages = 'en' | 'tc' | 'sc';

type DataTypes = 'flw' | 'fnd' | 'rhrread' | 'warnsum' | 'warningInfo' | 'swt';

type TrueFalseString = 'TRUE' | 'FALSE';

type DateString = string;

type DaysOfTheWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

interface IAPIParameters {
    lang?: Languages;
}

interface IValueUnit {
    value: number;
    unit: string;
}

interface IGetLocalWeatherForecastResult {
    /** General Situation */
    generalSituation: string;
    /** Tropical Cyclone Information */
    tcInfo: string;
    /** Fire Danger Warning Message */
    fireDangerWarning: string;
    /** Forecast Period */
    forecastPeriod: string;
    /** Forecast Description */
    forecastDesc: string;
    /** Outlook */
    outlook: string;
    /** Update Time */
    updateTime: string;
}

interface IWeatherForecast {
    /** Forecast Date YYYYMMDD */
    forecastDate: string;
    /** Forecast Weather */
    forecastWeather: string;
    /** Forecast Maximum Temperature */
    forecastMaxtemp: IValueUnit;
    /** Forecast Minimum Temperature */
    forecastMintemp: IValueUnit;
    /** Week */
    week: DaysOfTheWeek;
    /** Forecast Wind */
    forecastWind: string;
    /** Forecast Maximum Relative Humidity */
    forecastMaxrh: string;
    /** Forecast Minimum Relative Humidity */
    forecastMinrh: string;
    /** Forecast Weather Icon */
    ForecastIcon: number;
}

interface ISoilTemp extends IValueUnit {
    place: string;
    recordTime: string;
    depth: IValueUnit;
}

interface ISeaTemp extends IValueUnit {
    place: string;
    recordTime: string;
}

interface IGet9DayWeatherForecastResult {
    /** General Situation */
    generalSituation: string;
    /** Weather Forecast */
    weatherForecast: IWeatherForecast[];
    /** Soil Temperature */
    soilTemp: ISoilTemp[] | ISoilTemp;
    /** Sea Surface Temperature */
    seaTemp: ISeaTemp[] | ISeaTemp;
}

interface ILightningItem {
    place: string;
    occur: boolean | string;
}

interface ILightning {
    data: ILightningItem[];
    startTime: DateString;
    endTime: DateString;
}

interface IRainfallItem {
    unit: string;
    place: string;
    max?: number;
    min?: number;
    main: TrueFalseString;
}

interface IRainfall {
    data: IRainfallItem[];
    startTime: string;
    endTime: string;
}

interface IUVIndexItem {
    place: string;
    value: number;
    desc: string;
    message?: string;
}

interface IUVIndex {
    data: IUVIndexItem[];
    recordDesc: string;
}

interface ITemperatureItem extends IValueUnit {
    place: string;
}

interface ITemperature {
    data: ITemperatureItem[];
    recordTime: DateString;
}

interface IHumidity extends ITemperature {}

interface IGetCurrentWeatherReportResult {
    lightning?: ILightning;
    rainfall: IRainfall;
    icon: number[];
    iconUpdateTime: DateString;
    uvindex: IUVIndex;
    updateTime: DateString;
    warningMessage: string;
    rainstormReminder?: string;
    specialWxTips?: string[] | string;
    tcmessage?: string[] | string;
    mintempFrom00To09?: string;
    rainfallFrom00To12?: string;
    rainfallLastMonth?: string;
    rainfallJanuaryToLastMonth?: string;
    temperature: ITemperature;
    humidity: IHumidity;
}

interface IGetWeatherWarningSummaryProperty {
    name: string;
    code: string;
    actionCode: string;
    issueTime: DateString;
    expireTime?: DateString;
    updateTime: DateString;
}

interface IGetWeatherWarningSummaryResult {
    WFIRE?: IGetWeatherWarningSummaryProperty;
    WFROST?: IGetWeatherWarningSummaryProperty;
    WHOT?: IGetWeatherWarningSummaryProperty;
    WCOLD?: IGetWeatherWarningSummaryProperty;
    WMSGNL?: IGetWeatherWarningSummaryProperty;
    WRAIN?: IGetWeatherWarningSummaryProperty;
    WFNTSA?: IGetWeatherWarningSummaryProperty;
    WL?: IGetWeatherWarningSummaryProperty;
    WTCSGNL?: IGetWeatherWarningSummaryProperty;
    WTMW?: IGetWeatherWarningSummaryProperty;
    WTS?: IGetWeatherWarningSummaryProperty;
}

type WarningStatementCodes =
    | 'WFIRE' // Fire Danger Warning
    | 'WFROST' // Frost Warning
    | 'WHOT' // Hot Weather Warning
    | 'WCOLD' // Cold Weather Warning
    | 'WMSGNL' // Strong Monsoon Signal
    | 'WTCPRE8' // Pre-no.8 Special Announcement
    | 'WRAIN' // Rainstorm Warning Signal
    | 'WFNTSA' // Special Announcement on Flooding in the northern New Territories
    | 'WL' // Landslip Warning
    | 'WTCSGNL' // Tropical Cyclone Warning Signal
    | 'WTMW' // Tsunami Warning
    | 'WTS'; // Thunderstorm Warning

interface IGetWeatherWarningInformationResult {
    details?: {
        contents: string[];
        warningStatementCode: WarningStatementCodes;
        subtype?: string;
        updateTime: DateString;
    }[];
}

interface IGetSpecialWeatherTipsResult {
    swt: {
        desc?: string;
        updateTime?: DateString;
    }[];
}

export {
    Languages,
    DataTypes,
    TrueFalseString,
    DateString,
    DaysOfTheWeek,
    WarningStatementCodes,
    IAPIParameters,
    IValueUnit,
    IGetLocalWeatherForecastResult,
    IWeatherForecast,
    ISoilTemp,
    ISeaTemp,
    IGet9DayWeatherForecastResult,
    ILightningItem,
    ILightning,
    IRainfallItem,
    IRainfall,
    IUVIndexItem,
    IUVIndex,
    ITemperatureItem,
    ITemperature,
    IHumidity,
    IGetCurrentWeatherReportResult,
    IGetWeatherWarningSummaryProperty,
    IGetWeatherWarningSummaryResult,
    IGetWeatherWarningInformationResult,
    IGetSpecialWeatherTipsResult,
};
