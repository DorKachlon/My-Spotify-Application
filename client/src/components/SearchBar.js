/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import Swal from "sweetalert2";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    textField: {
        textAlign: "center",
        marginTop: "-10px",
        "& > div >  input": {
            color: "white",
        },
        "&:focus": {
            marginTop: "10px",
        },
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [option, setOption] = useState([]);

    async function loadOption(word) {
        if (word) {
            try {
                const { data } = await axios.get(`search/${word}`);
                setOption(data);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        } else {
            setOption([]);
        }
    }
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={option.map((obj) => obj.name)}
                renderInput={(params) => (
                    <>
                        <TextField
                            className={classes.textField}
                            color="secondary"
                            onChange={(e) => loadOption(e.target.value)}
                            {...params}
                            label={"SEARCH"}
                            // InputProps={{
                            //     ...params.InputProps,
                            //     type: "search",
                            // }}
                        />
                    </>
                )}
            />
            {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={option.map((obj) => obj.name)}
                    renderInput={(params) => (
                        <>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                {...params}
                                onChange={(e) => loadOption(e.target.value)}
                                InputProps={{
                                    ...params.InputProps
                                    
                                }}
                            />
                        </>
                    )}
                />
            </div> */}
        </div>
    );
}
