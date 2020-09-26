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
    const [inputValue, SetInputValue] = useState("");
    const [option, setOption] = useState([]);
    const history = useHistory();

    //נכנס בקליק על אופציה
    //נכנס בעת כיתוב אחרי לואד
    function clickHendler(e) {
   
        if (e.keyCode === 13) {
  
            history.push(`/search?params=${inputValue}`);
        } else {
            console.log(e.currentTarget.innerText);
            history.push(`/search?params=${e.currentTarget.innerText}`);
        }
    }

    //נכנס בעת כיתוב
    async function setter(e) {

        if (e.keyCode === 40) {
            if (option.length !== 0) {
                let num = option.findIndex(
                    (element) => element.name === e.target.value
                );
                if (num === -1) {
                    SetInputValue(option[0].name);
                } else {
                    if (num === option.length - 1) {
                        SetInputValue(option[0].name);
                    } else {
                        SetInputValue(option[num + 1].name);
                    }
                }
            }
        } else if (e.keyCode === 38) {
            if (option.length !== 0) {
                let num = option.findIndex(
                    (element) => element.name === e.target.value
                );
                if (num === -1) {
                    SetInputValue(option[option.length - 1].name);
                } else {
                    if (num === 0) {
                        SetInputValue(option[option.length - 1].name);
                    }
                }
            }

        } else if (e.keyCode === 13) {
            history.push(`/search?params=${inputValue}`);
        }
    }

    async function loadOption(e) {
    if (e.keyCode !== 13) {
        SetInputValue(e.target.value);
        if (e.target.value) {
            try {
                const { data } = await axios.get(
                    `/api/search?keyWord=${e.target.value}`
                );
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
    }}
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                onChange={(e) => clickHendler(e)}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={option.map((obj) => obj.name)}
                value={inputValue}
                renderInput={(params) => (
                    <>
                        <TextField
                            className={classes.textField}
                            color="secondary"
                            onKeyUp={(e) => setter(e)}
                            onChange={(e) => loadOption(e)}
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
