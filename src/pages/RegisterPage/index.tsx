import { RegisterForm } from "../../components/RegisterForm";
import { AuthLayout } from "../../components/layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};
