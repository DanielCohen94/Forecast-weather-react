import React from 'react';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import ForecastPage from "./components/Forecast/ForecastPage";
import Menu from "./components/Shared/Menu";
import LocationsEditorPage from "./components/Location/LocationsEditorPage";
import {ListLocations} from "./components/Shared/ListLocations";

export default function App() {

    const [locations, addNewLoc, rmLocByName, markOneLoc] = ListLocations({})

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>}>
                    <Route path="forecast" element={<ForecastPage locations={locations} markOneLoc={markOneLoc}/>}/>
                    <Route path="location" element={<LocationsEditorPage addNewLoc={addNewLoc} locations={locations}
                                                                         rmLocByName={rmLocByName}/>}/>
                    <Route path="/" element={<Navigate to="forecast" replace/>}/>
                    <Route path="*" element={<Navigate to="forecast" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

