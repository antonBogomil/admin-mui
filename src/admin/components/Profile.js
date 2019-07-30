import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import {useStyles} from "../styles";
import Link from "@material-ui/core/Link";
import RelativeLink from "./RelativeLink";
import Avatar from "./Avatar";

const Profile = () => {
    const {img, name} = useSelector((state) => state.user);
    const [t] = useTranslation();
    return (
        <>
            <RelativeLink to={'/profile'}>
                <Grid container spacing={2} alignItems={'center'} alignContent={'center'}>
                    <Grid item>
                        <Avatar imgSrc={img}>
                            <PersonIcon/>
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" noWrap>
                            {t('HELLO', {name: name})}
                        </Typography>
                    </Grid>
                </Grid>
            </RelativeLink>
        </>
    );
};
export default Profile;