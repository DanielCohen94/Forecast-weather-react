import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

/**
 *
 * @param location to do fetch to 7timer
 * @returns {{dataForecast: null, error: null, dataImage: null}}
 * dataForecast - Location forecast data
 * dataImage - An image showing the forecast
 * error - Errors in case happened
 */
export const use7timerFetch = (location) => {

    const isRendering = useRef(true);

    const [state, setState] = useState({dataImage: null, dataForecast: null, error: null});

    useEffect(() => {
        return () => {
            isRendering.current = false;
        }
    }, [])

    /** url strings */
    const url = `http://www.7timer.info/bin/api.pl?lon=${location.longitude}&lat=${location.latitude}&product=civillight&output=json`;
    const urlImage = `http://www.7timer.info/bin/astro.php?lon=${location.longitude}&lat=${location.latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;

    /** set state according to the fetch */
    useEffect(() => {
        setState({
            dataImage: null,
            dataForecast: null,
            loading: true,
            error: null
        });

        isRendering.current = true;
        getData(url, urlImage)
            .then(res => {
                if (isRendering.current)
                    setState(res);
            })
            .catch(err => setState(err));

        return () => isRendering.current = false;

    }, [location]);

    /**
     * do axios and return state
     * @returns {Promise<{dataForecast: *, loading: boolean, error: null, dataImage: string}|{dataForecast: null, loading: boolean, error: string, dataImage: null}>}
     */
    const getData = async () => {
        return await axios.get(url)
            .then(res => {

                if (!res.data.dataseries)
                    // eslint-disable-next-line no-throw-literal
                    throw '';

                return {
                    dataImage: urlImage,
                    dataForecast: res.data.dataseries,
                    loading: false,
                    error: null
                }

            })
            .catch(() => {
                return {
                    dataImage: null,
                    dataForecast: null,
                    loading: false,
                    error: 'weather forecast service is not available right now, please try again later.'
                }
            })
    }

    return state;
}