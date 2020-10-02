import React, { useState } from "react";
import network from "../network/network";
import Email from "@material-ui/icons/Email";
import FormControl from "@material-ui/core/FormControl";
import "../styles/Register.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PeopleIcon from "@material-ui/icons/People";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
    name: {
        marginBottom: "20px",
        width: "320px",
    },
    email: {
        marginBottom: "20px",
        width: "320px",
    },
    password: {
        marginBottom: "20px",
        width: "320px",
    },
    confirmPassword: {
        marginBottom: "70px",
        width: "320px",
    },
    submit: {
        marginBottom: "30px",
        background: "linear-gradient(45deg, #2AC796 30%, #31AD86 90%)",
        color: "white",
    },
}));

export default function Register() {
    const classes = useStyles();
    const [values, setValues] = useState({
        name:"",
        email: "",
        password: "",
        confirmPassword:"",
        showPassword: false,
    });
    const [chacked, setChecked] = useState(false);
console.log(values);
    async function clickhandler() {
        console.log(values.email);
        console.log(values.password);
        const obj = {
            email: values.email,
            password: values.password,
        };
        setValues({
            email: "",
            password: "",
            showPassword: false,
        });
        console.log(obj);
        await network.post(`/api/auth/login`, obj).then((res) => {
            if (res.status === 200) {
                window.location = "/";
            }
        });
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleChecked = () => {
        setChecked(!chacked);
    };
    return (
        <div className="loginForm">
            <div className="header">
                <div className="title">Register</div>
                <div>
                    <IconButton>
                        <FacebookIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon style={{ color: "white" }} />
                    </IconButton>
                </div>
            </div>

            <div className="paper">
                <FormControl className={ classes.name}>
                    <InputLabel
                        style={{ color: "grey" }}
                        htmlFor="standard-adornment-password"
                    >
                        Full Name
                    </InputLabel>
                    <Input
                        color="secondary"
                        onChange={handleChange("name")}
                        endAdornment={
                            <InputAdornment
                                style={{ opacity: "0.7" }}
                                position="end"
                            >
                                <PeopleIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.email}>
                    <InputLabel
                        style={{ color: "grey" }}
                        htmlFor="standard-adornment-password"
                    >
                        Email
                    </InputLabel>
                    <Input
                        color="secondary"
                        onChange={handleChange("email")}
                        endAdornment={
                            <InputAdornment
                                style={{ opacity: "0.7" }}
                                position="end"
                            >
                                <Email />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={classes.password}>
                    <InputLabel
                        style={{ color: "grey" }}
                        className={classes.labelPass}
                        htmlFor="standard-adornment-password"
                    >
                        Password
                    </InputLabel>
                    <Input
                        type="password"
                        onChange={handleChange("password")}
                        color="secondary"
                        endAdornment={
                            <InputAdornment position="end">
                                <LockOutlinedIcon style={{ opacity: "0.7" }} />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className={ classes.confirmPassword}>
                    <InputLabel
                        style={{ color: "grey" }}
                        className={classes.labelPass}
                        htmlFor="standard-adornment-password"
                    >
                        Confirm Password
                    </InputLabel>
                    <Input
                        type={values.showPassword ? "text" : "password"}
                        onChange={handleChange("confirmPassword")}
                        color="secondary"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    style={{ opacity: "0.7" }}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                                <LockIcon style={{ opacity: "0.7" }} />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className="checkBoxContainer">
                    <Checkbox
                        checked={chacked}
                        onChange={handleChecked}
                        name="checkedA"
                    />
                    <div className="paregrapCheckbox">
                        I accept the <i>Terms of Use</i> & <i>Privacy Policy</i>
                    </div>
                </div>

                <Button className={classes.submit} onClick={clickhandler}>
                    get started
                </Button>
            </div>
        </div>
    );
}
