import { Link as RRDLink } from "react-router-dom";
import Link from "@mui/material/Link";

type Route = `/${string}`;

interface ICustomLink {
  redirectTo: Route;
  children: string;
}

export const CustomLink: React.FC<ICustomLink> = ({ redirectTo, children }) => {
  return (
    <Link
      sx={{ color: "white" }}
      to={redirectTo}
      underline="none"
      component={RRDLink}
    >
      {children}
    </Link>
  );
};
