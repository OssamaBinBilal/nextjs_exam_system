import TextField from "@mui/material/TextField";

export default function Input({ label, multiline, sx }) {
  return (
    <TextField label={label} multiline={multiline} sx={sx} variant="standard" />
  );
}
