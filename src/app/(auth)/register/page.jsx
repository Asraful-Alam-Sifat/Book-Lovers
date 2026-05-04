"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { username, image, email, password } = data;

    const { data: responseData, error } = await authClient.signUp.email({
      email,
      password,
      name: username,
      image: image,
    });

    if (error) {
      toast.error(error.message || "Register failed!");
    } else {
      // console.log("Signup success:", responseData);

      toast.success("Account created successfully! Redirecting...");
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="container mx-auto my-20 bg-base-300 rounded-box p-8">
      <h1 className="font-bold text-3xl uppercase text-center">Register</h1>

      <form
        onSubmit={handleSubmit(handleRegisterFunc)}
        className="bg-base-100 mx-auto fieldset border-base-300 rounded-box  border p-10 max-w-[600px] mt-10"
      >
        <label className="label font-bold text-xl gap-0.5">
          Username<span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          {...register("username", { required: "Username field is required" })}
          className="input w-full"
          placeholder="Enter Username"
        />
        {errors.username && (
          <p className="text-red-400">{errors.username.message}</p>
        )}

        <label className="label font-bold text-xl mt-2 gap-0.5">
          Image Url<span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          {...register("image", { required: "Image url is required" })}
          className="input w-full"
          placeholder="Image URL"
        />
        {errors.image && <p className="text-red-400">{errors.image.message}</p>}

        <label className="label font-bold text-xl mt-2 gap-0.5">
          Email<span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          {...register("email", { required: "Email field is required" })}
          className="input w-full"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <label className="label font-bold text-xl mt-2 gap-0.5">
          Password<span className="text-red-400">*</span>
        </label>
        <input
          type="password"
          {...register("password", { required: "Password field is required" })}
          className="input w-full"
          placeholder="Enter Your Password"
        />
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}

        <button className="btn btn-neutral font-medium text-xl mt-5">Register</button>
      </form>

      <div className="max-w-[750px] mx-auto mt-10 ">
        <div className="divider my-4  text-gray-500 ">OR</div>

        <button
          onClick={handleGoogleRegister}
          type="button"
          className="btn btn-outline mx-auto flex items-center justify-center gap-2 border-gray-400 hover:bg-gray-100 text-black my-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Continue with Google
        </button>
      </div>

      <p className="text-center mt-3">
        already have an account?{" "}
        <Link href={"/login"} className="text-blue-900 font-bold underline ">
          Login
        </Link>
      </p>
      <div></div>
    </div>
  );
};

export default Register;
