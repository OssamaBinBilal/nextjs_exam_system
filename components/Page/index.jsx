import { Box, useTheme } from "@mui/material";
import styles from "./page.module.css";

const Page = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      className={styles.main}
      sx={{ backgroundColor: theme.palette.white.main }}
    >
      {children}
    </Box>
  );
};

export default Page;
