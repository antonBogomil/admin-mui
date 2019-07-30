import {myDB, TYPE} from '../db/db';

const userScheme = {
    name: {
        type: TYPE.STRING,
    },
    login: {
        type: TYPE.STRING
    },
    password: {
        type: TYPE.STRING,
    },
    active: {
        type: TYPE.BOOL
    },
    dateCreated: {
        type: TYPE.DATE,
        default: new Date,
    }
};
const User = myDB.createModel('Users', userScheme);
export default User;