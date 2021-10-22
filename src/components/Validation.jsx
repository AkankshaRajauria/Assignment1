import React from 'react'

const Validation = (values) => {
    let errors = {}

    if(!values.username) {
        errors.username = "Username is Required"
    }
    if(!values.email) {
        errors.email = "Email is Required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }
    if(!values.password) {
        errors.password = "Password is Required"
    } else if(values.password.length < 5) {
        errors.password = "Password must be more than 5 characters."
    }

    return errors;
}

export default Validation
