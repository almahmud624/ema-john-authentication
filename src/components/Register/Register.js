import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl  border border-gray-300 z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                            account to enjoy all the services without any ads for free!</p>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div className="text-center mt-6">
                        <button className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
                        <div className="flex md:justify-between justify-center items-center mt-10">
                            <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12"></div>
                            <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p>
                            <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-2 mt-7 mb-4">
                            <div>
                                <button className="text-center w-full text-white bg-yellow-600 p-3 duration-300 rounded-sm hover:bg-yellow-700">Google</button>
                            </div>
                            <div>
                                <button className="text-center w-full text-white bg-yellow-600 p-3 duration-300 rounded-sm hover:bg-yellow-700">Facebook</button>
                            </div>
                        </div>
                        <p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer"><Link to='/login'>Log In</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;