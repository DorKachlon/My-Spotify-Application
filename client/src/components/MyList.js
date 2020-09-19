import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    rootList: {
        width: "35vw",
        backgroundColor: "transparent",
        borderRadius: "5px",
        marginTop: "auto",
        padding: 0,
        position: "absolute",
        bottom: 0,
    },

    itemOfList: {
        padding: 0,
        color: "white",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "grey",
            "& .imgPlay": {
                visibility: "visible !important",
            },
        },
        margin: "3px",
    },
    itemSelected: {
        padding: 0,
        backgroundColor: "rgb(40, 184, 105)",
        color: "white",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "rgb(40, 184, 105)",
        },
        margin: "3px",
    },
    List: {
        padding: 0,
        marginLeft:"1vw",
        
    },
    divider: { backgroundColor: "grey" },
}));

export default function MyList({
    list,
    search,
    pathname,
    coverImg,
    artistName,
}) {
    console.log("search: " + search);
    console.log("phatname: " + pathname);
    const classes = useStyles();
    function lengthSong(length) {
        length = Number(length);
        var h = Math.floor(length / 3600);
        var m = Math.floor((length % 3600) / 60);
        var s = Math.floor((length % 3600) % 60);

        var hDisplay = h > 0 ? h + ":" : "";
        var mDisplay = m > 0 ? m + ":" : "";
        var sDisplay = s < 10 ? "0" + s : s;
        return hDisplay + mDisplay + sDisplay;
    }
    return (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.List}
            style={pathname.includes("song")?{width: "35vw"}:{width: "94vw"}}

        >
            <div className="containerList">
                {list.map((songObj) => {
                    let link;
                    if (search) {
                        link = `/song/${songObj.song_id}${search}`;
                    } else {
                        link = `/song/${songObj.song_id}?${
                            pathname.split("/")[1]
                        }=${pathname.split("/")[2]}`;
                    }
                    return (
                        <Link to={link} key={songObj.song_id}>
                            <div className="containerListItem">
                                <ListItem
                                    button
                                    className={
                                        search &&
                                        Number(pathname.split("/")[2]) ===
                                            songObj.song_id
                                            ? classes.itemSelected
                                            : classes.itemOfList
                                    }
                                    style={pathname.includes("song")?{width: "35vw"}:{width: "94vw"}}
                                >
                                    <div className="containerItem">
                                        <img
                                            className="imgListItem"
                                            src={
                                                coverImg
                                                    ? coverImg
                                                    : songObj.cover_img
                                            }
                                            alt=""
                                        />
                                        <img
                                            className="imgPlay"
                                            src="https://www.lynnettechadwick.com/wp-content/uploads/2015/04/play-button.png"
                                            alt=""
                                        />
                                        <div className="containerNames">
                                            <div className="nameListItem">
                                                {songObj.name}
                                            </div>
                                            <div className="artistListItem">
                                                {artistName
                                                    ? artistName
                                                    : songObj.artist_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="duration">
                                        {lengthSong(songObj.length)}
                                    </div>
                                </ListItem>
                                <Divider className={classes.divider} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </List>
    );
}
