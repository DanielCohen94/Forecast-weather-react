import React from 'react';

import {PrintLocation} from "../Shared/PrintLocation";
import LiButtons from "../Shared/LiButtons";

/**
 * The list of locations from which the user
 * selects one to view the forecast for
 * @param locations data structure
 * @param location that the user selected
 * @param setLocation function to change the selected location
 * @param markOneLoc function to mark the selected location
 * @returns {JSX.Element} locations list
 * @constructor
 */
export const ChooseLocation = ({locations, location, setLocation, markOneLoc}) => {

    const updateRender = async () => {
        setLocation({
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude,
            selected: location.selected,
            render: true
        });
    }

    const selectLocation = (e) => {
        markOneLoc(e);
        setLocation(e);
    }

    return (
        <>
            <PrintLocation
                locations={locations}
                func={selectLocation}
                LocationComp={LiButtons('select')}
            />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={() => updateRender()}>
                    Display weather forecast
                </button>
            </div>
            {
                location.selected && <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                    <h2>{location.name}</h2>
                    <p>lat: {location.latitude}, lon: {location.longitude}</p>
                </div>
            }
        </>
    );
}