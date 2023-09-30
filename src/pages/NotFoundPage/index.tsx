import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => navigate("/");

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>404, page not found</h1>
      <Button onClick={clickHandler} variant="contained" color="primary">
        Go home
      </Button>
    </Box>
  );
};
