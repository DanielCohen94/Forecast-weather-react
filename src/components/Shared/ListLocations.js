import {useState} from 'react';

/**
 * manage list of location
 * @returns {[string,(function(*): boolean),rmLocByName,markOneLoc]}
 * @constructor
 */
export const ListLocations = () => {

    const [locations, setLocations] = useState('');

    /**
     * Inserts newLoc if it does not exist in locations
     * @param newLoc new location to entered into locations
     * @returns {boolean} If newLoc does not already exist
     */
    const addNewLoc = (newLoc) => {
        let copy = [...locations];
        let isExist = true;
        if (copy.find((lc) => lc.name === newLoc.name) === undefined) {
            copy = [...copy, newLoc];
            setLocations(copy);
            isExist = false;
        }
        return isExist;
    }

    /**
     * remove one location from the list by name
     * @param nameToDelete name of location
     */
    const rmLocByName = (nameToDelete) => {
        let copy = [...locations];
        copy.splice(copy.findIndex((lc) => lc.name === nameToDelete), 1);
        setLocations(copy);
    }

    /**
     * mark one location that the User-selected
     * @param locToSelected the location that the User-selected
     */
    const markOneLoc = (locToSelected) => {
        let copy = [...locations];
        // eslint-disable-next-line array-callback-return
        copy.map(loc => {
            loc.selected = loc.name === locToSelected.name;
        });
        setLocations(copy);
    }

    return [locations, addNewLoc, rmLocByName, markOneLoc];
}