const defaultRules = {
    password: {
        min: 8,
        max: 16,
        confirm: true,
    },
};

export const validate = (values = [], rules = defaultRules) => {
    console.log(values);
    const errors = {};
    for (let key in values) {
        let value = values[key];
        if (rules[key] && rules[key].required) {

            if (value.length === 0) {
                errors[key] = 'This field is required!';
                continue;
            }
        }
        if (key === 'password' && rules.password) {
            let rule = rules.password;
            if (value !== values.passwordConfirm && rule.confirm) {
                errors['passwordConfirm'] = 'VALID_PASSWORD_DIFF';
                // errors.push(new ValidationError('passwordConfirm', 'VALID_PASSWORD_DIFF'));
            }
            if (value.length < rule.min || value.length > rule.max) {
                errors[key] = 'VALID_LENGTH';
                // errors.push(new ValidationError(key, 'VALID_LENGTH'))
            }
        }

    }
    return errors
};

function ValidationError(fieldName, message) {
    this.fieldName = fieldName;
    this.message = message;
}