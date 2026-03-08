import { LoginForm } from "@/components/login-form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const user = await getUser();
  if (user) return redirect("/");

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <LoginForm />
    </div>
  );
};

export default Login;
