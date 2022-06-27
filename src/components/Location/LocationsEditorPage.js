import React from "react";

import FormList from "./FormList"
import {PrintLocation} from "../Shared/PrintLocation";
import LiButtons from '../Shared/LiButtons'

/**
 * mange location list , remove , add and display location
 * @param addNewLoc - func new location
 * @param locations  - list location
 * @param rmLocByName - func remove loc by name
 * @returns {JSX.Element}
 * @constructor
 */
export default function LocationsEditorPage({addNewLoc, locations, rmLocByName}) {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 bg-info bg-opacity-10 p-3 center">
                        <FormList addNewLoc={addNewLoc}/>
                    </div>
                    <div className="col-md-12 col-lg-6 bg-info bg-opacity-10 p-3 center">
                        <PrintLocation locations={locations} func={rmLocByName} LocationComp={LiButtons('remove')}/>
                    </div>
                </div>
            </div>
        </>
    );

}

