import { RegisterComponent } from "../../components/RegisterComponent";
import { AuthLayout } from "../../components/layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterComponent />
    </AuthLayout>
  );
};
