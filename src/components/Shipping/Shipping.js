import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold my-7">This is Shipping <span className="border-b-2 border-transparent hover:border-b-2 hover:border-gray-800 transition-all cursor-pointer pb-1">page</span></h1>
            <form className="w-2/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-4" defaultValue={user.displayName} type="text" placeholder="Name" {...register("name")} />
                <input className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-4" defaultValue={user.email} type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-600 block mb-4 -mt-2">This field is required</span>}
                <input className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-4" defaultValue="" placeholder="Address" {...register("address", { required: true })} />
                {errors.address && <span className="text-red-600 block mb-4 -mt-2">This field is required</span>}
                <input className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-4" type="tel" defaultValue="" placeholder="Phone" {...register("phone")} />

                <input className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl cursor-pointer" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;