import { ThemeProvider } from "@mui/material";
import "../app/globals.css";
import theme from "@/app/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
