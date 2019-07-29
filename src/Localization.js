import {DEFAULT_LOCALE_CODE} from "./admin/config/locales";
import {changeTranslation} from "./i18n";

const Localization = props => {
    const localeUrl = props.match.params.locale;
    changeTranslation(localeUrl || DEFAULT_LOCALE_CODE);
    return props.children
};
Localization.propTypes = {};
export default Localization;
