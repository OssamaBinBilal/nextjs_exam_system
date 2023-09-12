import React from "react";
import Modal from "../Modal";
import Input from "../Input/Input";
import { Button, Typography } from "@mui/material";
import signup from "@/apiCalls/users/signup";

const SignupModal = ({ open, setOpen }) => {
  const handleSubmit = () => {
    signup().then((response) => console.log(response));
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Ready to Dive In? Sign up for a Seamless Experience!
      </Typography>
      <Input sx={{ width: "100%", mb: 1 }} label={"Email"} />
      <Input sx={{ width: "100%", mb: 5 }} label={"Password"} />
      <Button variant="contained" sx={{ width: "100%" }} onClick={handleSubmit}>
        Submit
      </Button>
    </Modal>
  );
};

export default SignupModal;
