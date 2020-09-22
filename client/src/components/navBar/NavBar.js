import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../../styles/navBar.css";
import SearchBar from "./SearchBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AlbumIcon from "@material-ui/icons/Album";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
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
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [navOrMenu, setNavOrMenug] = useState(window.innerWidth < 1100?true:false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const displayWindowSize = () => {
        if (window.innerWidth < 1100) {
            setNavOrMenug(true);
        } else {
            setNavOrMenug(false);
        }
    };
    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", displayWindowSize);

    return (
        <>
            {navOrMenu ? (
                <nav>
                    <AppBar
                        color="secondary"
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: drawerOpen,
                        })}
                    >
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                className={classes.title}
                            >
                                DK
                            </Typography>
                            <IconButton
                                color="secondary"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawer}
                                className={clsx(drawerOpen && classes.hide)}
                            >
                                <MenuIcon />
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
                            <ListItem button key="home" component={Link} to="/">
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
                            >
                                <ListItemIcon>
                                    <QueueMusicIcon />
                                </ListItemIcon>
                                <ListItemText primary="playlist" />
                            </ListItem>
                            <Divider />
                        </List>
                    </Drawer>
                </nav>
            ) : (
                <nav>
                    <Tabs
                        style={{
                            justifyContent: "space-around",
                            color: "white",
                        }}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        className={scrolling ? "scrollingBacground" : "nothing"}
                    >
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="Songs" component={Link} to="/songs" />
                        <Tab label="Albums" component={Link} to="/albums" />
                        <Tab
                            label="Playlists"
                            component={Link}
                            to="/playlists"
                        />
                        <div className="searchBar">
                            <SearchBar />
                        </div>
                    </Tabs>
                </nav>
            )}
        </>
    );
}