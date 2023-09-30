import { RegisterComponent } from "../../components/RegisterComponent";
import { AuthLayout } from "../../components/layout/AuthLayout";

export const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterComponent />
    </AuthLayout>
  );
};
