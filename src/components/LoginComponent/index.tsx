import { useEffect } from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "../Common/CustomLink";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/dispatch";
import { login, selectedUser } from "../../store/auth/authSlice";

export interface LoginForm {
  email: string;
  password: string;
}

export const LoginComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isSuccess } = useSelector(selectedUser);

  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const submitHandler: SubmitHandler<LoginForm> = async (data) => {
    dispatch(login(data));
  };
  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h4" component={"h1"}>
            Login
          </Typography>
          <InputLabel
            htmlFor="email"
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
          >
            Your email
          </InputLabel>
          <TextField
            type="email"
            id="email"
            variant="outlined"
            margin="normal"
            placeholder="Type your email"
            {...register("email")}
          />
          <InputLabel
            htmlFor="password"
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
          >
            Your password
          </InputLabel>
          <TextField
            type="password"
            id="password"
            variant="outlined"
            margin="normal"
            placeholder="Type your password"
            {...register("password")}
          />
          <Button
            variant="contained"
            style={{
              marginTop: "16px",
              height: "30px",
              backgroundColor: "#f0c14b",
              borderColor: " #a88734 #9c7e31 #846a29",
              textTransform: "none",
            }}
            type="submit"
          >
            Login
          </Button>
          <Divider sx={{ mt: "30px", mb: "30px" }} />
          <div>
            Or <CustomLink redirectTo="/register">register</CustomLink>
          </div>
        </Grid>
        Test: test@gmail.com / 12345
        <CustomLink redirectTo="/blogs">blogs</CustomLink>
      </form>
    </Box>
  );
};
