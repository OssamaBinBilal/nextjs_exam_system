import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
import { useTheme } from "@mui/material";

const Navbar = ({ handleRegisterModalOpen }) => {
  const theme = useTheme();
  return (
    <AppBar position="static" color={"white"} className={styles.main}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Why RT-9?
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ px: 4, py: 1, fontWeight: "bold", textTransform: "capitalize" }}
          onClick={handleRegisterModalOpen}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
