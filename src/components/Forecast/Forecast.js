import React from 'react';

import {use7timerFetch} from "./use7timerFetch";
import loadingData from '../../images/loading.gif'
import weather from "../../images/weather.png";
import {Tbody} from "./Tbody";

/**
 * show the forecast of given location
 * @param location that was going to be shown in the forecast
 * @returns {JSX.Element} for forecast element
 * @constructor
 */
export default function Forecast({location}) {

    let state = use7timerFetch(location);
    let {loading} = state;
    let {dataImage, dataForecast, error} = state;

    return (
        <>
            {(location.render) ?
                <>
                    {!loading ?
                        <>
                            {!error ?
                                <>
                                    <h2>Location: {location.name}</h2>
                                    <img src={dataImage} className="col-md-8 col-12  offset-md-2"
                                         alt={`${location.name}`}/>
                                    <div className="table-responsive">

                                        <table className="table table-striped table-dark">
                                            <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Weather</th>
                                                <th scope="col">Temperatures</th>
                                                <th scope="col">Wind conditions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {dataForecast.map((loc, i) => (
                                                <Tbody key={i} location={loc}/>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                : <p>{error}</p>}
                        </>
                        :
                        <img src={loadingData} className="rounded mx-auto d-block" alt="loading"
                             style={{width: '300px'}}/>
                    }
                </>
                :
                <img src={weather} className="rounded mx-auto d-block" alt="forecast" style={{width: '500px'}}/>
            }
        </>
    );
}