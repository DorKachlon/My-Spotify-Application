import React, { useState } from "react";
import network from "../network/network";
import Email from "@material-ui/icons/Email";
import FormControl from "@material-ui/core/FormControl";
import "../styles/Login.css";
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
import Particles from "react-particles-js";
import { useHistory } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";
import { motion } from "framer-motion";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  email: {
    marginBottom: "20px",
    width: "320px",
    "&:hover": {
      fontWeight: "normal",
    },
  },
  password: {
  
    width: "320px",
  },
  submit: {
    marginBottom: "30px",
    background: "linear-gradient(45deg, #2AC796 30%, #31AD86 90%)",
    color: "white",
  },
  rememberMe:{
    marginBottom: "60px",
    marginRight:"180px",
  }
}));

export default function Login({ setLogin }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  let history = useHistory();

  async function clickhandler() {
    const obj = {
      email: values.email,
      password: values.password,
      rememberMe: rememberMe,
    };
    try {
      await network.post(`/api/auth/login`, obj);
      setValues({
        email: "",
        password: "",
        showPassword: false,
      });
      setRememberMe(false);
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
        className="loginForm"
      >
        <div className="header">
          <div className="title">Login</div>
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
          <FormControl
            // name="email"
            // type="email"
            className={(classes.textField, classes.email)}
          >
            <InputLabel style={{ color: "grey" }} htmlFor="standard-adornment-password">
              Email
            </InputLabel>
            <Input
              name="email"
              type="email"
              color="secondary"
              onChange={handleChange("email")}
              endAdornment={
                <InputAdornment style={{ opacity: "0.7" }} position="end">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            // className={clsx(classes.margin, classes.textField)}
            className={(classes.textField, classes.password)}
          >
            <InputLabel
              style={{ color: "grey" }}
              className={classes.labelPass}
              htmlFor="standard-adornment-password"
            >
              Password
            </InputLabel>
            <Input
              name="password"
              type={values.showPassword ? "text" : "password"}
              // value={values.password}
              onChange={handleChange("password")}
              color="secondary"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ opacity: "0.7" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  <LockIcon style={{ opacity: "0.7" }} />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
             className={classes.rememberMe}
            htmlFor="rememberMe"
            value="start"
            control={<Checkbox />}
            label="Remember me"
            labelPlacement="end"
            name="rememberMe"
            type="checkbox"
            onChange={() => setRememberMe((prevState) => !prevState)}
          />
          {error && (
            <motion.div className="errorLogin">
              <ErrorIcon style={{ color: "white", marginLeft: "4px" }} />
              <div className="errorPeregraph">{error}</div>
            </motion.div>
          )}
          <Button className={classes.submit} onClick={clickhandler}>
            Login
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
