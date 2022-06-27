import React from 'react';

/**
 * Print the list generically on both pages
 * @param locations list location
 * @param func to activate by the LocationComp
 * @param LocationComp component to get the li label
 * @returns {JSX.Element}
 * @constructor
 */
export const PrintLocation = ({locations, func, LocationComp}) => {

    return (
        <>
            <h2>Locations:</h2>
            {
                (!locations.length) ?
                    <p>(no locations yet...)</p> :
                    <>
                        <ul className="list-group">
                            {locations.map((loc, i) => (
                                <LocationComp key={i} location={loc} func={func}/>
                            ))}
                        </ul>
                    </>
            }
        </>
    );
}