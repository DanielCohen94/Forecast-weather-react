import React from 'react';

/**
 * Table body
 * @param location to display
 * @returns {JSX.Element} The location data is broken down into the body of a table
 * @constructor
 */
export const Tbody = ({location}) => {

    /** make the date */
    const date = String(location.date).replace(
        /(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3'
    );
    const match = date.match(/(\d{4})-(\d{2})-(\d{2})?/,);
    const [, year, month, day] = match;
    const dd = new Date(year, month - 1, day);

    return (
        <>
            <tr>
                <th scope="row">
                    {
                        dd.toLocaleString('en-us', {weekday: 'short'})
                        + ' ' + dd.toLocaleString('en-us', {month: 'short'})
                        + ' ' + day + ' ' + year
                    }
                </th>
                <td>{Weather[location.weather]}</td>
                <td>{location.temp2m.min}&#8451; to {location.temp2m.max}&#8451;</td>
                <td>{WindSpeed[location.wind10m_max]}</td>
            </tr>
        </>
    );
}

const Weather = {
    clear: 'Total cloud cover less than 20%',
    pcloudy: 'Total cloud cover between 20% - 60%',
    mcloudy: 'Total cloud cover between 60% - 80%',
    cloudy: 'Total cloud cover over 80%',
    humid: 'Relative humidity over 90% with total cloud cover less than 60%',
    lightrain: 'Precipitation rate less than 4mm/hr with total cloud cover more than 80%',
    oshower: 'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%',
    ishower: 'Precipitation rate less than 4mm/hr with total cloud cover less than 60%',
    lightsnow: 'Precipitation rate less than 4mm/hr',
    rain: 'Precipitation rate over 4mm/hr',
    snow: 'Precipitation rate over 4mm/hr',
    rainsnow: 'Precipitation type to be ice pellets or freezing rain',
    ts: 'Lifted Index less than -5 with precipitation rate below 4mm/hr',
    tsrain: 'Lifted Index less than -5 with precipitation rate over 4mm/hr'
}

const WindSpeed = {
    1: 'No wind',
    2: '0.3-3.4m/s (light)',
    3: '3.4-8.0m/s (moderate)',
    4: '8.0-10.8m/s (fresh)',
    5: '10.8-17.2m/s (strong)',
    6: '17.2-24.5m/s (gale)',
    7: '24.5-32.6m/s (storm)',
    8: 'Over 32.6m/s (hurricane)'
}
