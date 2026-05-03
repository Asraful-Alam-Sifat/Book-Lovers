"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    // e.preventDefault();
    // console.log(data);
   
  };
 console.log(errors)
  return (
    <div className="container mx-auto mt-20 bg-base-300 rounded-box p-8">
      <h1 className="font-bold text-3xl uppercase text-center">Login</h1>

      <form
        onSubmit={handleSubmit(handleLoginFunc)}
        className="bg-base-100 mx-auto fieldset border-base-300 rounded-box  border p-10 max-w-[600px] mt-10"
      >
        <label className="label font-bold text-xl">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email field is required" })}
          className="input w-full"
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label className="label font-bold text-xl mt-2">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password field is required" })}
          className="input w-full"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button className="btn btn-neutral mt-5">Login</button>
      </form>

      <p className="text-center mt-3">
        Don&apos;t have an account?{" "}
        <Link href={"/register"} className="text-blue-900 font-bold underline ">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
