import React, {useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {ListItemIcon} from "@material-ui/core";
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useStyles} from "../styles";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const Menu = ({data, depth = 0, parentUrl = ''}) => {
    const activePath = window.location.pathname;
    const classes = useStyles();
    return (
        <List component={'nav'} className={classNames(classes.menu, {[classes.menuNested]: depth > 0})}>
            {
                data && data.map((item, i) => {
                    return (
                        <MenuItem item={item}
                                  isActive={activePath === (parentUrl + item.url)}
                                  parentUrl={parentUrl}
                                  key={item.id || i} depth={depth}/>
                    )
                })
            }
        </List>
    );
};
const MenuItem = ({item, depth, parentUrl, isActive}) => {
    const [open, setOpen] = useState(false);
    const [t] = useTranslation();
    const classes = useStyles();


    return (
        <>
            {
                item.nested ?
                    <>
                        <ListItem
                            button
                            key={item.title}
                            onClick={() => {
                                setOpen(!open);
                            }}
                            className={classNames(classes.menuItem, {[classes.nestedMenuItem]: depth > 0})}
                            component={'div'}
                        >
                            {item.icon &&
                            <ListItemIcon className={classes.menuIcon}>
                                {item.icon}
                            </ListItemIcon>}
                            <ListItemText primary={t(item.title)}/>
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={open} timeout="auto">
                            <Menu data={Object.values(item.nested)}
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
                            {item.icon}
                        </ListItemIcon>}
                        <ListItemText primary={t(item.title)}/>
                    </ListItemLink>
                // item.action ?
                //     <ListItem
                //         button
                //         key={item.title}
                //         onClick={() => {
                //             item.action()
                //         }}
                //         className={classNames(classes.menuItem, {[classes.nestedMenuItem]: depth > 0})}
                //         component={'div'}
                //     >
                //         {item.icon &&
                //         <ListItemIcon className={classes.menuIcon}>
                //             {item.icon}
                //         </ListItemIcon>}
                //         <ListItemText primary={t(item.title)}/>
                //     </ListItem>
                //     :
                //     <ListItemLink
                //         key={item.title}
                //         className={classNames(classes.menuItem, {[classes.nestedMenuItem]: depth > 0})}
                //         to={parentUrl + item.url}
                //         selected={isActive}
                //         button
                //     >
                //         {item.icon &&
                //         <ListItemIcon className={classes.menuIcon}>
                //             {item.icon}
                //         </ListItemIcon>}
                //         <ListItemText primary={t(item.title)}/>
                //     </ListItemLink>

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
export default Menu;
