import Modal from "../Modal";
import Input from "../Input/Input";
import { Button, Typography } from "@mui/material";
import login from "@/apiCalls/auth/login";
import { useState } from "react";
import CircularLoadingBar from "../CircularLoadingBar";

const LoginModal = ({ open, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    login("sheikhusamabilal@gmail.com", "hellothere")
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <Modal open={open} setOpen={setOpen} isLoading={isLoading}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Welcome back! Log in to continue your journey.
      </Typography>
      <Input sx={{ width: "100%", mb: 1 }} label={"Email"} />
      <Input sx={{ width: "100%", mb: 5 }} label={"Password"} />
      <Button
        disabled={isLoading}
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleSubmit}
      >
        {isLoading ? <CircularLoadingBar width={25} /> : "Submit"}
      </Button>
    </Modal>
  );
};

export default LoginModal;
