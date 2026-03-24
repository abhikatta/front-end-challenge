import { LoginForm } from "@/app/(auth)/login/login-form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const Signup = async () => {
  const user = await getUser();
  if (user) return redirect("/");

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <LoginForm />
    </div>
  );
};

export default Signup;
