import React from "react";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {useStyles} from "../styles";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import {history} from '../../utils/history';

export default function wrappedPage(Component, settings) {
	let WrappedPage = (props) => {
		const classes = useStyles();
		return (
			<main className={classes.content}>
				<div className={classes.toolbar}/>
				<Grid container spacing={2}>

				</Grid>
				<Grid container spacing={3} justify={"space-between"}>
					<Grid item>
						<IconButton onClick={history.goBack}>
							<BackIcon/>
						</IconButton>
					</Grid>
					<Grid item>
						<Typography variant="h3"
									component="h3"
									color={'primary'}
						>
							{settings.title}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Component {...props}/>
					</Grid>
				</Grid>
			</main>
		)
	};
	return WrappedPage;
}