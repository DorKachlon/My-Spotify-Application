import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import network from "../../network/network";
import { fade, makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

const widthOfSearch = "200px";

const useStyles = makeStyles((theme) => ({
    autoComplete: {
        position: "relative",
        borderRadius: "30px",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        transition: theme.transitions.create("width"),
        "& div": {
        padding:"0px 5px !important",
        },
        width: "auto",
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                //regular border
                border: "none",
            },
            "&.Mui-focused fieldset": {
                //focused border
                border: "none",
            },
            "&:hover fieldset": {
                //hover border
                border: "none",
            },
        },
    },
    textField: {
        color: "black",
        width: "auto",
        padding:"0px",
        minWidth: widthOfSearch,
        transition: theme.transitions.create("width"),
        transitionTimingFunction: "easeInEaseOut",
        "& input": {
            "&:focus": {
                transition: theme.transitions.create("width"),
                width: `calc(${widthOfSearch} + (${widthOfSearch} / 3))`,
            },
        },
    },
}));

export default function SearchBarV2() {
    const classes = useStyles();
    const [options, setOptions] = useState([]);
    const history = useHistory();

    async function loadOption(e) {
        if (e.target.value !== "") {
            try {
                const { data } = await network.get(`/api/search?keyWord=${e.target.value}`);
                setOptions(data);
                console.log(data);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        } else {
            setOptions([]);
        }
    }
    const changeValue = (value) => {
        if (value === null) {
            setOptions([]);
        } else {
            history.push(`/search?params=${value}`);
        }
    };

    return (
        <Autocomplete
            autoComplete
            disableListWrap
            freeSolo
            clearOnEscape
            className={classes.autoComplete}
            onChange={(event, value) => changeValue(value)}
            options={options.map((option) => option.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Search…"
                    className={classes.textField}
                    color="black"
                    onChange={(e) => loadOption(e)}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        />
    );
}
