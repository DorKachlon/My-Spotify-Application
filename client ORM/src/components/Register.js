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
import ErrorIcon from "@material-ui/icons/Error";
import Particles from "react-particles-js";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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

export default function Register({ setLogin }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
    });
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    let history = useHistory();

    async function clickhandler() {
        if (!checked) {
            setError("You must accept our polisy");
            return;
        }
        if (values.password !== values.confirmPassword) {
            setError("Your password not the same");
            return;
        }
        const obj = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        console.log(obj);
        try {
            await network.post(`/api/auth/register`, obj);
            setValues({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                showPassword: false,
            });
            setLogin(true);
            history.push("/home");
        } catch (error) {
            setError(error.response.data);
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleChecked = () => {
        setChecked(!checked);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    default: { duration: 2 },
                }}
                className="registerForm"
            >
                <div className="headerRegister">
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

                <div className="paperRegister">
                    <FormControl className={classes.name}>
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
                                    <LockOutlinedIcon
                                        style={{ opacity: "0.7" }}
                                    />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl className={classes.confirmPassword}>
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
                    {error && (
                        <div className="error">
                            <ErrorIcon
                                style={{ color: "white", marginLeft: "4px" }}
                            />
                            <div className="errorPeregraph">{error}</div>
                        </div>
                    )}
                    <div className="checkBoxContainer">
                        <Checkbox
                            checked={checked}
                            onChange={handleChecked}
                            name="checkedA"
                        />
                        <div className="paregraphCheckbox">
                            I accept the <i>Terms of Use</i> &{" "}
                            <i>Privacy Policy</i>
                        </div>
                    </div>

                    <Button className={classes.submit} onClick={clickhandler}>
                        get started
                    </Button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: { duration: 1 },
                }}
            >
                <Particles
                    width="100vw"
                    height="70vh"
                    params={{
                        particles: {
                            number: {
                                value: 50,
                            },
                            size: {
                                value: 3,
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                        },
                    }}
                />
            </motion.div>
        </div>
    );
}
