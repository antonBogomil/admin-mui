import React from 'react';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {mainStyle} from "../../styles/main.style";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";
const Uploader = ({classes}) => {
    return (
        <Paper>
            <div className={classes.uploadImageContainer}>
                <input
                    accept="image/*"
                    className={classes.hidden}
                    id="button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="button-file">
                    <Fab component={'span'} size={"large"} color="primary">
                        <CloudUploadIcon/>
                    </Fab>
                </label>
            </div>
            <div>
                <IconButton aria-label="Delete"  size={"medium"}>
                    <DeleteIcon fontSize="default" />
                </IconButton>
            </div>
        </Paper>
    );
};

export default withStyles(mainStyle)(Uploader);