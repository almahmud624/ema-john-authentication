import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    console.log(location.state?.from);
    const redirectUri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUri);
            })
    }
    return (
        <div>
            <div className="py-7">
                <h2 className="text-center text-4xl font-semibold">Login</h2>
                <div className="w-2/4 mx-auto">
                    <form>
                        <div className="mb-4">
                            <label className="block text-md font-light mb-2" htmlFor="username">Username</label>
                            <input className="w-full bg-drabya-gray border-gray-500 appearance-none border rounded p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" id="username" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-md font-light mb-2" htmlFor="password">Password</label>
                            <input className="w-full bg-drabya-gray border-gray-500 appearance-none border rounded p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                        </div>

                        <div className="flex items-center justify-between mb-5">
                            <button className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                                LOGIN
                            </button>
                            <a className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500" href="/">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12"></div>
                        <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p>
                        <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-7 mb-4">
                        <button onClick={handleGoogleLogin} className="text-center w-full text-white bg-yellow-600 p-3 duration-300 rounded-sm hover:bg-yellow-700">Google</button>
                    </div>
                    <p className="text-center text-md font-light">Don't have an account? <Link to='/register' className="font-light text-md text-indigo-600">Create</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;