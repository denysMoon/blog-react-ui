import Box from "@mui/material/Box";
import { ROUTES } from "../constants";
import { CustomLink } from "../../Common/CustomLink";

export const Navigate: React.FC = () => {
  return (
    <Box
      sx={{ ml: 2, display: "flex", justifyContent: "space-between", gap: 1 }}
    >
      {ROUTES.map((route) => {
        return <CustomLink redirectTo={route.path} children={route.name} />;
      })}
    </Box>
  );
};
