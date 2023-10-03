import { useEffect } from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { login, selectedUser } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/dispatch";

export interface LoginForm {
  email: string;
  password: string;
}

export const LoginComponent: React.FC = () => {
  const { register, handleSubmit, reset, formState } = useForm<LoginForm>();
  const { isValid } = formState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, isSuccess, isLoading } = useSelector(selectedUser);

  // TODO: add validation with yup

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
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
            {...register("email", {
              required: true,
              minLength: 5,
              maxLength: 50,
            })}
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
            {...register("password", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          <Button
            disabled={isLoading || !isValid}
            variant="contained"
            style={{
              marginTop: "16px",
              height: "30px",
              textTransform: "none",
            }}
            type="submit"
          >
            Login
          </Button>
          <Divider sx={{ mt: "30px", mb: "30px" }} />
          <div>
            Or <Link to="/register">register</Link>
          </div>
        </Grid>
        Test: test@gmail.com / 12345
      </form>
    </Box>
  );
};
