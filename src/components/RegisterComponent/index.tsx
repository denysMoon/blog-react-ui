import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  registerUser,
  reset as resetAuthState,
  selectedUser,
} from "../../store/auth/authSlice";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/dispatch";
import { CustomLink } from "../Common/CustomLink";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export const RegisterComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<RegisterForm>();
  const dispatch = useAppDispatch();
  const { isSuccess } = useSelector(selectedUser);
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("isSuccess", isSuccess);
    if (isSuccess) {
      // navigate("/login");
      resetAuthState();
    }
  }, [isSuccess]);

  const submitHandler: SubmitHandler<RegisterForm> = async (data) => {
    dispatch(registerUser(data));

    // console.log("data", data);

    reset();
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
            Create account
          </Typography>
          <InputLabel
            htmlFor="name"
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
          >
            Your name
          </InputLabel>
          <TextField
            type="text"
            id="text"
            variant="outlined"
            margin="normal"
            placeholder="Type your name"
            {...register("name")}
          />
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
            // disabled={isLoading}
            style={{
              marginTop: "16px",
              height: "30px",
              backgroundColor: "#f0c14b",
              borderColor: " #a88734 #9c7e31 #846a29",
              textTransform: "none",
            }}
            type="submit"
          >
            Register
          </Button>
          <Divider sx={{ mt: "30px", mb: "30px" }} />
          <div>
            Or <CustomLink redirectTo="/login">login</CustomLink>
          </div>
        </Grid>
      </form>
    </Box>
  );
};
