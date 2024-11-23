import { useDispatch, useSelector } from "react-redux"
import { handleUpdate, registerUser, toggleFormAuth } from "../redux/slices/AuthSlice"

const SignupForm = () => {
    const dispatch = useDispatch()

    const {
        tempUser: {
            email, password,
        },
    } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(handleUpdate({ name, value }));
        const psw1 = e.target?.elements?.password;
        const psw2 = e.target?.elements?.confirmPassword;
        psw1?.setCustomValidity('');
        psw2?.setCustomValidity('');
    };

    const handleRegister = () => {
        dispatch(
            registerUser({
                admin: {
                    email,
                    password,
                },
            }),
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const psw1 = e.target.elements.password;
        const psw2 = e.target.elements.confirmPassword;
        console.log(psw1.value, psw2.value);
        if (psw1.value !== psw2.value) {
            psw2.setCustomValidity('Passwords do not match');
        } 
            psw2.setCustomValidity('');
            handleRegister(e);
            dispatch(toggleFormAuth());
            psw1.value = '';
            psw2.value ='';
    };

    return (
        <section className="flex flex-col md:flex-row h-[75vh] items-center">
            <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-[100%]">
                <img
                    src="https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-6xl font-annapurna">Hello Admin</h1>
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                        Create your account
                    </h1>

                    <form className="mt-6" action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label className=" text-gray-700 hidden">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                value={email}
                                autoFocus
                                autoComplete="on"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="hidden text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                minLength="6"
                                value={password}
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="hidden text-gray-700">Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                minLength="6"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>



                        <button
                            type="submit"
                            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                        >
                            Sign Up
                        </button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button
                        type="button"
                        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                    >
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="w-6 h-6"
                                viewBox="0 0 48 48"
                            >
                                <defs>
                                    <path
                                        id="a"
                                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                    />
                                </defs>
                                <clipPath id="b">
                                    <use xlinkHref="#a" overflow="visible" />
                                </clipPath>
                                <path
                                    clipPath="url(#b)"
                                    fill="#FBBC05"
                                    d="M0 37V11l17 13z"
                                />
                                <path
                                    clipPath="url(#b)"
                                    fill="#EA4335"
                                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                                />
                                <path
                                    clipPath="url(#b)"
                                    fill="#34A853"
                                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                                />
                                <path
                                    clipPath="url(#b)"
                                    fill="#4285F4"
                                    d="M48 48L17 24l-4-3 35-10z"
                                />
                            </svg>
                            <span className="ml-4">Sign up with Google</span>
                        </div>
                    </button>

                    <p className="mt-8">
                        Already have an account?{' '}
                        <a onClick={() => dispatch(toggleFormAuth())}
                            href="#"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                            Login to your account
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SignupForm

