import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import logo from "../app/code-speech.png";
import { useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const Index = () => {
  const theme = useTheme();

  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  // const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterModalOpen = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <Page>
      <Navbar handleRegisterModalOpen={handleRegisterModalOpen} />
      <LoginModal open={isLoginModalOpen} setOpen={setIsLoginModalOpen} />
      <SignupModal
        open={isRegisterModalOpen}
        setOpen={setIsRegisterModalOpen}
      />
      <Box sx={{ width: "min(90%, 1200px)", mx: "auto" }}>
        <Grid container sx={{ py: 15 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
              Where teaching and learning come together
            </Typography>
            <Typography variant="p" sx={{ fontSize: "24px", mb: 4 }}>
              Google Classroom helps educators create engaging learning
              experiences they can personalize, manage, and measure. Classroom
              is part of Google Workspace for Education, which empowers your
              institution with simple, safer, collaborative tools.{" "}
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              onClick={handleLoginModalOpen}
            >
              Login
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: greaterThanMid ? "right" : "center",
              mt: !greaterThanMid ? 10 : 0,
            }}
          >
            <Image width={450} height={450} src={logo} alt="logo" />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Index;
