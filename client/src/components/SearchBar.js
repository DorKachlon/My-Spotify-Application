import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

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

}));

export default function SearchBar() {
    const classes = useStyles();
    const [inputValue, SetInputValue] = useState([]);
    const [option, setOption] = useState([]);
    const history = useHistory();
    function clickHendler(e) {
        if (e.keyCode === 13) {
            if (e.currentTarget.innerText !== "SEARCH") {
                history.push(`/search?params=${e.currentTarget.innerText}`);
            } else {
                history.push(`/search?params=${inputValue}`);
            }
        } else {
            console.log(e.currentTarget.innerText);
            history.push(`/search?params=${e.currentTarget.innerText}`);
        }
    }

    async function loadOption(word) {
        SetInputValue(word);
        if (word) {
            try {
                const { data } = await axios.get(`search?params=${word}`);
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
                onChange={(e) => clickHendler(e)}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={option.map((obj) => obj.name)}
                renderInput={(params) => (
                    <>
                        <TextField
                            value={inputValue}
                            className={classes.textField}
                            color="secondary"
                            onChange={(e) => loadOption(e.target.value)}
                            {...params}
                            label={<SearchIcon />}
                            InputProps={{
                                ...params.InputProps,
                                type: "search",
                            }}
                        />
                    </>
                )}
            />
        </div>
    );
}
