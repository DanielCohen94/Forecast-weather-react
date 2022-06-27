import {useState} from 'react';

/**
 *  validation form
 * @param input
 * @returns {[{latitude: string, name: string, longitude: string},unknown,manageInput,resetErrors,((function(): boolean)|*)]}
 */
export const useValidatorForm = (input) => {

    const [formInput, setFormInput] = useState(input.fields);
    const [formErrors, setFormErrors] = useState(input.errors);

    const manageInput = (e, fieldKey) => {
        const obj = Object.assign({}, formInput);
        obj[fieldKey] = e.target.value;
        setFormInput(obj);
    }

    const resetErrors = () => {
        setFormErrors(input.errors);
    }
    /**
     * validation on form ,name and  range
     * @returns {boolean}
     */
    const validateForm = () => {
        formInput.name = formInput.name.trim();
        formInput.latitude = formInput.latitude.trim();
        formInput.longitude = formInput.longitude.trim();

        let errName = isNotEmpty(formInput.name);
        let errLatitude = validateField(formInput.latitude, -90.0, 90.0)
        let errLongitude = validateField(formInput.longitude, -180.0, 180.0)

        if (errName || errLatitude || errLongitude) {
            setFormErrors({errName, errLatitude, errLongitude});
            return false;
        }
        return true;
    }

    const validateField = (data, min, max) => {
        let err = isNotEmpty(data);
        if (!err)
            err = isPatternCoordinate(data);
        if (!err)
            err = isInRange(data, min, max);
        return err
    }

    const isNotEmpty = (inp) => {
        return (!inp) ? `required` : '';
    }

    /**
     * check if the data is Coordinate
     * @param inp - data
     * @returns {string} return empty string If everything is true if not returns a sentence
     */
    const isPatternCoordinate = (inp) => {
        return (/^[+-]?\d+(\.\d+)?$/.test(inp) === false) ?
            'Value must be a decimal number: only digits, a single minus and a single dot are allowed' : '';
    }
    /**
     *
     * @param inp - The data of the test
     * @param min - min range
     * @param max - max range
     * @returns {string|string} - return empty string If everything is true and word if no
     */
    const isInRange = (inp, min, max) => {
        return (inp >= min && inp <= max) ?
            '' : `Value must be a decimal between ${min} and ${max}`;
    }

    return [formInput, formErrors, manageInput, resetErrors, validateForm];
}