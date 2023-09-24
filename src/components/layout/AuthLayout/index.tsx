import { Grid } from "@mui/material";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid sx={{ p: 2 }} container direction={"column"}>
      <h1>Blog</h1>
      <main>{children}</main>
    </Grid>
  );
};
