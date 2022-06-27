import React, {useState} from 'react';
import {useValidatorForm} from "./useValidatorForm";

/**
 *
 * @param addNewLoc func add location
 * @returns {JSX.Element}
 * @constructor
 */
export default function FormList({addNewLoc}) {

    const [errorForm, updateErrorForm] = useState('');

    const [inputs, inputsError, manageInput, resetErrors, validateForm]
        = useValidatorForm({
        fields: {name: '', latitude: '', longitude: ''},
        errors: {errorName: '', errorLatitude: '', errorLongitude: ''}
    });

    const {name, latitude, longitude} = inputs;
    const {errName, errLatitude, errLongitude} = inputsError;

    const submit = async (e) => {
        e.preventDefault();
        updateErrorForm({message: ''});

        if (validateForm()) {
            resetErrors();
            if (addNewLoc({
                name: name,
                latitude: latitude,
                longitude: longitude,
                selected: false
            })) {
                updateErrorForm({
                    message: 'This locations was added.'
                });
            }
        }
    }
    /**
     *
     * @param nameField - string name field
     * @param val - value
     * @param err - string err
     * @returns {JSX.Element} return input label
     */
    const getInputLabel = (nameField, val, err) => {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor="Location" className="form-label">{nameField}:</label>
                    <input type="text"
                           className="form-control"
                           name={nameField}
                           value={val}
                           onChange={(e) => manageInput(e, nameField)}
                    />
                    {err && (<div className="text-danger errormessage">{err}</div>)}
                </div>
            </>
        );
    }

    return (
        <>
            <form onSubmit={submit}>
                {getInputLabel("name", name, errName)}
                {getInputLabel("latitude", latitude, errLatitude)}
                {getInputLabel("longitude", longitude, errLongitude)}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Add Location</button>
                    {errorForm.message && <div className="text-danger errormessage">{errorForm.message}</div>}
                </div>
            </form>
        </>
    );

}
