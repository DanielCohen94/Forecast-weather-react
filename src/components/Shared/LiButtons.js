import React from "react";

/**
 *
 * @param btn string that represents the location buttons
 * @returns {function({location: *, func: *})}
 * function that returns {JSX.Element} for remove or select location in the list
 * @constructor
 */
export default function LiButtons(btn) {

    /**
     *
     * @param location to select
     * @param func to mark the location
     * @returns {JSX.Element}
     */
    const select = ({location, func}) => {

        const handleClick = async (e) => {
            e.preventDefault();
            func(location);
        }

        return (
            <>
                <li type="button" id={location.name}
                    className={"list-group-item" + (location.selected ? ' list-group-item-success' : '')}
                    onClick={handleClick}>{location.name}</li>
            </>
        );
    }

    /**
     *
     * @param location to remove
     * @param func remove function
     * @returns {JSX.Element}
     */
    const remove = ({location, func}) => {

        const handleClick = (e) => {
            e.preventDefault();
            func(e.target.parentNode.id);
        }

        return (
            <>
                <li className="list-group-item" key={location.name} id={location.name}>{location.name}
                    <button type="button" className="btn-close btn-danger float-end" aria-label="Close"
                            onClick={handleClick}/>
                </li>
            </>
        );
    }

    if (btn === "select")
        return select;
    if (btn === "remove")
        return remove;
}
