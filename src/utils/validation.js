import {useTranslation} from "react-i18next";
import {VALIDATION_ERRORS} from "../constants/const";

const defaultRules = {
	password: {
		min: 3,
		max: 16,
		confirm: false,
	},
};

export const validate = (values = [], rules = defaultRules) => {
	const errors = {};
	for (let key in values) {
		let value = values[key];
		if (rules[key] && rules[key].required) {
			if (value.length === 0) {
				errors[key] = {
					type: VALIDATION_ERRORS.REQUIRED
				};
				continue;
			}
		}
		if (key === 'password' && rules.password) {
			let rule = rules.password;
			if (value !== values.passwordConfirm && rule.confirm) {
				errors['passwordConfirm'] = {
					type: VALIDATION_ERRORS.PASSWORD_NOT_MATCH,
				};
			}
			if (value.length < rule.min) {
				errors[key] = {
					type: VALIDATION_ERRORS.USE_MORE_CHARS,
					n: rule.min
				};
			}
			if (value.length > rule.max) {
				errors[key] = {
					type: VALIDATION_ERRORS.USE_MORE_CHARS,
					n: rule.max
				};
			}
		}

	}
	return errors
};
