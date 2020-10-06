import React from "react";
import "../styles/Guest.css";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    login: {
        marginBottom: "30px",
        background: "linear-gradient(45deg, #2AC796 30%, #31AD86 90%)",
        color: "white",
        padding: "20px 0",
        fontSize: "20px",
        margin: "20px",
        width: "150px",
    },
    signUp: {
        marginBottom: "30px",
        background: "linear-gradient(45deg, #2AC796 30%, #31AD86 90%)",
        color: "white",
        padding: "20px 0",
        fontSize: "20px",
        margin: "20px",
        width: "150px",
    },
}));
export default function Guest() {
    const classes = useStyles();

    return (
        <>
            <div className="titleGuest">
                <div className="titleGuest-1">Listening is</div>
                <div className="titleGuest-2">everything</div>
            </div>
            <div className="buttoms">
                <Button className={classes.login} component={Link} to="/login">
                    Log in
                </Button>
                <Button
                    className={classes.signUp}
                    component={Link}
                    to="/register"
                >
                    Sign up
                </Button>
            </div>
            <Particles
                className="particles"
                height="100vh"
                width="100vw"
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3,
                            },
                        },
                        line_linked: {
                            enable: false,
                        },
                        move: {
                            random: true,
                            speed: 1,
                            direction: "top",
                            out_mode: "out",
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 0,
                                opacity: 0,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4,
                            },
                        },
                    },
                }}
            />
        </>
    );
}
