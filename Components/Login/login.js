
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
// import CompanyLogo from "./logo.jpg";
import { useRouter } from "next/navigation";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ErrorMessage, SuccessMessage } from "@/AlertMessages/alertmessages";

const LoginCom=()=> {
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

 
  const goToSignUp = () => {
    router.push("/signup", { replace: true });
  };

  const goToAddTask=()=>{
    router.push("/addtask", { replace: true });

  }

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
      const res=await  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(data=>
  {SuccessMessage(`${data.username} Verified`);
  goToAddTask();
  localStorage.setItem('username',data.username);
  localStorage.setItem('token',data.token);}

  );
      } catch (error) {
        ErrorMessage('Error in Singin')
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
                  <img src="/images/logo1.jpg" alt="companyLogo" className="img" />
                  <div className="textandIcon">
                    <p className="pleaseLogin">Please Singin From Here</p>
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
                      src="/images/logo1.jpg"
                      alt="companyLogo"
                      className="mobileViewLogo"
                    />
                  </div>
                </div>
                <p className="loginForm"  style={{ color: "#013191" }}>
                  SignIn Form
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

                  <p
                    className="forgetPassword"
                    onClick={() => {
                      // forgetPassword();
                    }}
                  >
                    Forgot Password!
                  </p>
                </div>
                <div className="LoginBtnDiv">
                  <Button
                    className="LoginBtn"
                    onClick={() => {
                      SignInFunc();
                    }}
                    style={{ backgroundColor: "#013191" }}
                  >
                    SignIn
                  </Button>
                </div>
                <div className="notRegistered">
                <p>Not Registered! </p>
                <p
                  className="signUpLogin"
                  onClick={() => {
                    goToSignUp();
                  }}
                >
                  {" "}
                  SignUp
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

export default LoginCom;