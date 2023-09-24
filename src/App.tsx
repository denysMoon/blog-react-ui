import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Main } from "./pages/Main";
import { PageNotFound } from "./pages/PageNotFound";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Main />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
