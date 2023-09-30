import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Main } from "./pages/MainPage";
import { Login } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Blogs } from "./pages/Blogs";
import { PrivateRoutes } from "./components/layout/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Main />} />
      <Route path="blogs" element={<PrivateRoutes page={<Blogs />} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const App: React.FC = () => <RouterProvider router={router} />;
