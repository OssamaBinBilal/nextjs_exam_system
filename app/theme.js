const { createTheme } = require("@mui/material");
const { blue, green, cyan, grey } = require("@mui/material/colors");

const theme = createTheme({
  palette: {
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});

export default theme;
