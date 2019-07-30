import React, {useState} from 'react';
import PersonIcon from "./Profile";
import {useStyles} from "../styles";
import {Avatar as MUIAvatar} from "@material-ui/core"

const Avatar = ({imgSrc, alt, children, ...rest}) => {
    const [avatar, setAvatar] = useState(imgSrc);
    const classes = useStyles();
    return (
        <>
            <MUIAvatar className={classes.whiteIcon}
                       src={avatar}
                       imgProps={{
                           onError: () => {
                               setAvatar()
                           }
                       }}
                       {...rest}
            >
                {children}
            </MUIAvatar>
        </>
    );
};

export default Avatar;