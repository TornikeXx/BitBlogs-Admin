import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { login } from "../../supabase/auth";
import { Button, Input } from "antd";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const { mutate: handleLogIn } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const isEmailFilled = !!data.email;
    const isPasswordFilled = !!data.password;
    if (isEmailFilled && isPasswordFilled) {
      handleLogIn({ email: data.email, password: data.password });
    }
    reset();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-[500px] p-6 bg-[#fafafa] rounded-xl border-[1px] border-gray-200 cursor-pointer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center flex-col mb-8">
            <h1 className=" text-[#03050c] text-xl font-semibold dark:text-[#ffffff]">
              Log in o Admins
            </h1>
            <p className="text-[#555969] font-thin">Credentials</p>
          </div>
          <div className="mb-2">
            <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
              Email
            </p>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "invalid_email",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="john@example.com"
                    value={value}
                    onChange={onChange}
                  />
                </>
              )}
            />
          </div>
          <div className="mb-2">
            <p className=" text-[#03050c] text-[16px] font-semibold mb-2 dark:text-[#ffffff]">
              Password
            </p>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "required",
                minLength: {
                  value: 4,
                  message: "min_length",
                },
                maxLength: {
                  value: 15,
                  message: "max_length",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input type="password" value={value} onChange={onChange} />
                </>
              )}
            />
          </div>
          <Button type="primary" htmlType="submit" className="w-full">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
