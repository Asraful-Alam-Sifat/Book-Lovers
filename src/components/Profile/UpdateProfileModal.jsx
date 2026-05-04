"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UpdateProfileModal = () => {
    const router = useRouter();
  const openModal = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlemodalFunc = async (data) => {
    const { username, image, } = data;

    const { data: responseData, error } = await authClient.updateUser({
      name: username,
      image: image,
    });

    if (error) {
      toast.error(error.message || "Update failed!");
    } else {
      document.getElementById("my_modal_5").close();
    //   console.log(data, "responsedata");
      toast.success( "Successfully Update Info");
        setTimeout(() => {
            router.refresh()
        },1000)
    }
  };

  return (
    <div className="px-20">
      <button
        className="btn w-full bg-blue-950 text-white rounded-box text-md sm:text-xl uppercase py-7"
        onClick={openModal}
      >
        Update Profile
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <div>
            <h1 className="font-bold text-3xl capitalize text-center mt-3 mb-5">
              edit profile
            </h1>

            <form>
              <label className="label font-bold text-xl gap-0.5 mb-1">
                Username
              </label>
              <input
                type="text"
                {...register("username", {
                  required: "Username field is required",
                })}
                className="input w-full"
                placeholder="Enter Username"
              />
              {errors.username && (
                <p className="text-red-400">{errors.username.message}</p>
              )}

              <label className="label font-bold text-xl mt-5 mb-1 gap-0.5">
                Image Url
              </label>
              <input
                type="text"
                {...register("image", { required: "Image url is required" })}
                className="input w-full"
                placeholder="Image URL"
              />
              {errors.image && (
                <p className="text-red-400">{errors.image.message}</p>
              )}

              
            </form>
          </div>
          <div className="modal-action ">
            <form method="dialog">
              <button
                onClick={handleSubmit(handlemodalFunc)}
                className="btn w-[440px] md:w-[465px] bg-green-700 text-white text-xl uppercase py-7"
              >
                save changes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfileModal;
