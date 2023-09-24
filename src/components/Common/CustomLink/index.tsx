import { Link as RRDLink } from "react-router-dom";
import Link from "@mui/material/Link";

interface ICustomLink {
  redirectTo: string;
  children: string;
}

export const CustomLink: React.FC<ICustomLink> = ({ redirectTo, children }) => {
  return (
    <Link to={redirectTo} underline="none" component={RRDLink}>
      {children}
    </Link>
  );
};
