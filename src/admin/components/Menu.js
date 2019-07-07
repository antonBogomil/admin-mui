import React, {useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Icon from "./Icon";
import {ICON_EXPANDED_LESS, ICON_EXPANDED_MORE} from "../constants/icons";
import {ListItemIcon} from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import classNames from 'classnames';
import {menuStyles} from "../styles/menu.styles";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Menu = ({data, depth = 0, classes, parentUrl = ''}) => {
    const activePath = window.location.pathname;
    return (
        <List component={'nav'} className={classNames(classes.menu, {[classes.menuNested]: depth > 0})}>
            {
                data && data.map((item, i) => {
                    return (
                        <MenuItem item={item} classes={classes}
                                  isActive={activePath === (parentUrl + item.url)}
                                  parentUrl={parentUrl}
                                  key={item.id || i} depth={depth}/>
                    )
                })
            }
        </List>
    );
};
const MenuItem = ({item, depth, classes, parentUrl, isActive}) => {
    const [open, setOpen] = useState(false);
    const [t] = useTranslation();
    function openSubMenu() {
        setOpen(!open);
    }
    return (
        <>
            {
                item.nested ?
                    <>
                        <ListItem
                            button
                            key={item.title}
                            onClick={openSubMenu}
                            className={classNames(classes.menuItem, {[classes.nestedMenuItem]: depth > 0})}
                            component={'div'}
                        >
                            {item.icon &&
                            <ListItemIcon className={classes.menuIcon}>
                                <Icon name={item.icon}/>
                            </ListItemIcon>}
                            <ListItemText primary={t(item.title)}/>
                            {open ? <Icon name={ICON_EXPANDED_LESS}/> : <Icon name={ICON_EXPANDED_MORE}/>}
                        </ListItem>
                        <Collapse in={open} timeout="auto">
                            <Menu data={Object.values(item.nested)}
                                  classes={classes}
                                  parentUrl={parentUrl + item.url}
                                  depth={depth + 1}
                                  isOpen={open}
                            />
                        </Collapse>
                    </>
                    :
                    <ListItemLink
                        key={item.title}
                        className={classNames(classes.menuItem, {[classes.nestedMenuItem]: depth > 0})}
                        to={parentUrl + item.url}
                        selected={isActive}
                        button
                    >
                        {item.icon &&
                        <ListItemIcon className={classes.menuIcon}>
                            <Icon name={item.icon}/>
                        </ListItemIcon>}
                        <ListItemText primary={t(item.title)}/>
                    </ListItemLink>
            }
        </>
    )
};
const ListItemLink = (props) => {
    return (
        <NavLink to={props.to} activeClassName={'menu-item-active'}>
            <ListItem {...props} >
                {props.children}
            </ListItem>
        </NavLink>
    )
};
export default withStyles(menuStyles)(Menu);
