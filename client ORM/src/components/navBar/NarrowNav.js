import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBarV2";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AlbumIcon from "@material-ui/icons/Album";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Cookies from "js-cookie";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "../../styles/navBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "linear-gradient(45deg, #2AC796 30%, #31AD86 90%)",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        display: "flex",
        flexGrow: 1,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },
}));

export default function NarrowNav({ login, setLogin }) {
    const classes = useStyles();
    let history = useHistory();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleClicked = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const logoutClickHandlerDrawer = () => {
        setDrawerOpen(false);
        Cookies.remove("token");
        setLogin(false);
        history.push("/");
    };
    return (
        <nav>
            <AppBar
                color="secondary"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <img
                            style={{
                                width: "50px",
                                height: "40px",
                                marginTop: "5px",
                                filter: "brightness(10%)",
                            }}
                            src="https://i.ibb.co/jgT3n13/dk-tube3.png"
                            alt="dk-tube2"
                            border="0"
                        />
                        {login && (
                            <div style={{ marginLeft: "25px" }}>
                                <SearchBar />
                            </div>
                        )}
                    </Typography>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawer}
                        className={clsx(drawerOpen && classes.hide)}
                    >
                        <MenuIcon style={{ color: "black" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawer}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {login ? (
                        <>
                            <ListItem
                                button
                                key="home"
                                component={Link}
                                to="/home"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                key="songs"
                                component={Link}
                                to="/songs"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText primary="songs" />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                key="albums"
                                component={Link}
                                to="/albums"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <AlbumIcon />
                                </ListItemIcon>
                                <ListItemText primary="albums" />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                key="playlist"
                                component={Link}
                                to="/playlists"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <QueueMusicIcon />
                                </ListItemIcon>
                                <ListItemText primary="playlist" />
                            </ListItem>
                            <Divider />
                            <ListItem button key="logout" onClick={logoutClickHandlerDrawer}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItem>
                            <Divider />
                        </>
                    ) : (
                        <>
                            <ListItem
                                button
                                key="home"
                                component={Link}
                                to="/"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                key="login"
                                component={Link}
                                to="/login"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <FingerprintIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log in" />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                key="signup"
                                component={Link}
                                to="/register"
                                onClick={handleClicked}
                            >
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sign Up" />
                            </ListItem>
                            <Divider />
                        </>
                    )}
                </List>
            </Drawer>
        </nav>
    );
}
