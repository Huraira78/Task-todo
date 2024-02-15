
'use client'


import {
  Button,
  CssBaseline,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/login.scss";
import { useRouter } from "next/navigation";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const SignupCom=()=> {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  
  const toggle = (value) => {
    setViewPassword(!viewPassword);
  };

 
  const goToSignIn = () => {
    router.push("/signin", { replace: true });
  };

  const handleUsername = (e) => {
    const newUsername = e.target.value;
  
    setCredentials({
      ...credentials,
      username: newUsername,
    });
  };
  
  const handlePassword = (e) => {
    const password=e.target.value
    setCredentials({
      ...credentials,
      password: password,
    });
  };

  // password validitons function
  const passwordValidation = () => {
    let isValid = true;
    if (credentials.password !== "") {
      if (credentials.password.length < 8) {
        isValid = false;
        setPasswordError("password is too short");
      } else {
        setPasswordError(" ");
      }
    } else {
      isValid = false;
    }
    if (credentials.password === "") {
      isValid = false;
      setPasswordError("Please insert Password");
    }

    return isValid;
  };

  // Email Validation function
  const EmailValidationFunc = () => {
    let result = true; 

    if (credentials.username.trim() === "") {
      result = false;
      setUsernameError("Email cannot be empty");
    } else {
      const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      result = regex.test(credentials.username);

      if (!result) {
        setUsernameError("Invalid Email");
      } else {
        setUsernameError(""); 
      }
    }

    return result;
  };


  const SignInFunc = async () => {
    if (EmailValidationFunc() && passwordValidation()) {
      try {
       console.log('credentials',credentials);
      } catch (error) {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <div className="mainDivLogin">
        <div className="insideMain">
          <Grid container className="grid">
            <CssBaseline />
            <Grid item lg={4} md={6} sm={6}>
              <div className="imgMain">
                <div className="imgDiv">
                  <img src="/images/logo2.jpg" alt="companyLogo" className="img" />
                  <div className="textandIcon">
                    <p className="pleaseLogin">Get Registered Yourself</p>
                    <label for="outlined-basica">
                      <ArrowCircleRightIcon size={20} className="loginIcon" />
                    </label>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={11.5}>
              <div className="formDiv">
                <div className="mobileViewLogoSection">
                  <div className="mobileImgDiv">
                    <img
                      src="/images/logo2.jpg"
                      alt="companyLogo"
                      className="mobileViewLogo"
                    />
                  </div>
                </div>
                <p className="loginForm"  style={{ color: "#013191" }}>
                  SignUp Form
                </p>
                <p className="credentials">Enter the following credentials</p>
                <p className="error">{usernameError}</p>
                <div className="inputs">
                  <TextField
                    id="outlined-basica"
                    label="Enter Email"
                    variant="outlined"
                    required
                    type="text"
                    value={credentials.username}
                    onChange={(e) => {
                      handleUsername(e);
                    }}
                    sx={{
                      marginTop: "0.5rem",
                      width: "19rem",
                      lineHeight: "1em",
                      borderRadius: "12px!important",
                    }}
                  />
                  <p className="error">{passwordError}</p>
                  <div>
                    <TextField
                      type={viewPassword ? "text" : "password"}
                      id="outlined-basicb"
                      label="Enter password"
                      variant="outlined"
                      required
                      value={credentials.password}
                      onChange={(e) => {
                        handlePassword(e);
                      }}
                      sx={{
                        marginTop: "0.5rem",
                        width: "19rem",
                        lineHeight: "1em",
                        borderRadius: "12px!important",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <span style={{ background: "transparent" }}>
                              {viewPassword ? (
                                <VisibilityOffIcon
                                  onClick={() => {
                                    toggle(false);
                                  }}
                                  size={20}
                                />
                                
                              ) : (
                                <VisibilityIcon
                                  onClick={() => {
                                    toggle(true);
                                  }}
                                  size={20}
                                />
                              )}
                            </span>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                 
                </div>
                <div className="LoginBtnDiv">
                  <Button
                    className="LoginBtn"
                    onClick={() => {
                      SignInFunc();
                    }}
                    style={{ backgroundColor: "#013191" }}
                  >
                    SignUp
                  </Button>
                </div>
                <div className="notRegistered">
                <p>Already Registered! </p>
                <p
                  className="signUpLogin"
                  onClick={() => {
                    goToSignIn();
                  }}
                >
                  {" "}
                  SignIn
                  </p>
                  
              </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SignupCom;