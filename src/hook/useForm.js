import {useEffect, useState} from "react";
import {validate} from "../utils/validation";
export const useForm = (initState, callback, validationRules) => {
    const [values, setValues] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback && callback(values);
            console.log('Form has been submitted successfully!');
        }
    }, [errors]);
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values, validationRules));
        setIsSubmitting(true);
    };
    const handleReset = (event) => {
        if (event) event.preventDefault();
        setValues(initState);
    };
    const handleChange = (name, value) => {
        setErrors((prev) => {
            return {
                ...prev,
                [name]: null
            }
        });
        setValues(values => ({...values, [name]: value}));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        handleReset
    }

};