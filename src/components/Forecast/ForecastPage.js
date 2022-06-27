import React, {useEffect, useState} from "react";
import Forecast from "./Forecast"
import {ChooseLocation} from "./ChooseLocation";

/**
 * The forecast page contains:
 * The list from which the user selects a location
 * The forecast for the selected location
 * @param locations data structure
 * @param markOneLoc function to select and marked one location
 * @returns {JSX.Element} all forecast page
 * @constructor
 */
export default function ForecastPage({locations, markOneLoc}) {

    const [renderLocation, setRenderLocation] = useState({});

    const [selectLocation, setSelectLocation] = useState({
        name: '',
        latitude: '',
        longitude: '',
        selected: false,
        render: false
    });

    useEffect(() => {
        if (selectLocation.render &&
            selectLocation.latitude !== '' &&
            selectLocation.longitude !== '')
            setRenderLocation(selectLocation);
    }, [selectLocation.render]);

    useEffect(() => {
        return () => {
            selectLocation.selected = false;
            selectLocation.render = false;
            markOneLoc(selectLocation);
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <Forecast location={renderLocation}/>
                </div>

                <div className="row">
                    <div className="center bg-info bg-opacity-10 p-3 col-md-6 offset-md-3">
                        <ChooseLocation locations={locations} location={selectLocation} setLocation={setSelectLocation}
                                        markOneLoc={markOneLoc}/>
                    </div>
                </div>
            </div>
        </>
    );

}