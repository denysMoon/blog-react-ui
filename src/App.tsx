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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Main />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
