import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Slide, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import ErrorModal from "../../component/ErrorModal";
import SpinnerWithBackdrop from "../../component/SpinnerWithBackdrop";
import server from "./../../HTTP/Auth";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [signingIn, setSigningIn] = React.useState(false);
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(
    "Something went wrong. Pleae try again"
  );
  const [newPass, setNewPass] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSigningIn(true);
    const data = new FormData(event.currentTarget);
    const newPass = data.get("newPass");
    console.log(newPass);
    let path = `/api/auth/resetpassword/${newPass}`;
    if (localStorage.getItem("name") === null) {
      path = `/forgotPassword/resetpassword/${localStorage.getItem(
        "token"
      )}/${newPass}`;
    }
    server
      .post(path)
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("token");
        setSigningIn(false);
        window.location.replace("/signin");
      })
      .catch((err) => {
        console.log(err);
        setSigningIn(false);
        setShowErrorMessage(true);
        setErrorMessage("Something went wrong. Pleae try again");
      });
  };

  return (
    <Slide in={true} direction="left">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate={false}
            sx={{ mt: 2 }}
          >
            <Typography variant="body2" align="left" gutterBottom mb={2}>
              Enter your new password
            </Typography>
            <TextField
              required
              fullWidth
              id="newPass"
              label="OTP"
              name="newPass"
              type="password"
              autoFocus
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
        <SpinnerWithBackdrop
          backdropOpen={signingIn}
          helperText="Please wait ..."
        />
        <ErrorModal
          showErrorMessage={showErrorMessage}
          errorMessage={errorMessage}
          HandleModalClosed={() => {
            setShowErrorMessage(false), setSigningIn(false);
          }}
        />
      </Container>
    </Slide>
  );
}
