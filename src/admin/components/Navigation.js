import React from 'react';
import menu from "../config/menu";
import classNames from "classnames";
import {ListItemIcon} from "@material-ui/core";
import {ExitToAppOutlined} from "@material-ui/icons";
import Menu from "./Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "../styles";
import {useTranslation} from "react-i18next";
import Divider from "@material-ui/core/Divider";
import {userActions} from "../../store/actions";
import {userService} from "../../services/user.service";

const Navigation = (props) => {
	const classes = useStyles();
	const [t] = useTranslation();
	return (
		<div className={classes.navigationContainer}>
			<div>
				<Divider/>
				{props.children}
			</div>
			<div className={classes.bottomNavigation}>
				<Divider/>
				<List className={classes.bottomNavigationList}>
					<ListItem button
							  className={classNames(classes.menuItem)}
							  onClick={userService.logout}
					>
						<ListItemIcon className={classNames(classes.menuIcon, classes.logOutBtn)}>
							<ExitToAppOutlined/>
						</ListItemIcon>
						<ListItemText primary={t('LOGOUT')}/>
					</ListItem>
				</List>
			</div>
		</div>
	);
};

export default Navigation;