import { Outlet } from "react-router-dom";
import { Header } from "../../Header";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
