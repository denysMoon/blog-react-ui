import { LoginComponent } from "../../components/LoginComponent";
import { AuthLayout } from "../../components/layout/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
};
