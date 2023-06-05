import { useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { FaGooglePlusG } from 'react-icons/fa';
import { TbFidgetSpinner } from "react-icons/tb"
import { toast } from 'react-hot-toast';
import { savedUser } from '../../../API/auth';

const Login = () => {
    const { logIn, loading, setLoading, googleSignIn, passwordReset } = useAuth();
    // const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('')

    let from = location.state?.from?.pathname || "/";
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        setError('')
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                if (loggedUser) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false)
                setError("Email or Password does not match", error);
                toast.error(err.message)
            })

    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // User Put API Called 
                savedUser(result.user)
                if (loggedUser?.email) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                setLoading(false)
                console.log(error.message);
            })

    }
    const handlePasswordReset = () => {
        const emailValue = email;
        passwordReset(emailValue)
            .then(() => {
                alert("please check your mail")
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // const handleCaptcha = (e) => {
    //     const user_captcha_value = e.target.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisabled(false)
    //     }
    //     else {
    //         setDisabled(true)

    //     }
    // }

    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type and click enter " className="input input-bordered" />

                            </div> */}
                            {/* {TODO: Button Disabled } */}
                            <div className="form-control mt-6">
                                <button className=' bg-yellow-500 py-2 rounded-lg text-center text-white text-xl font-bold' type='submit'>{loading ? <TbFidgetSpinner size={24} className='text-slate-700 m-auto animate-spin'></TbFidgetSpinner> : "Login"}
                                </button>
                            </div>
                            <div>
                                <h2 className='text-red-500'>{error}</h2>
                                <p>Have no account? <Link to="/signUp" className='text-blue-500 font-semibold'>Sign Up</Link></p>
                            </div>
                        </form>
                        <div className='mb-4 mx-auto w-1/2 border rounded-lg text-center bg-slate-200 hover:bg-slate-500 transition duration-500 ease-in-out '>
                            <button onClick={handleGoogleSignIn} className=' font-bold py-2 w-full '><FaGooglePlusG className='mr-2 inline-block text-xl'></FaGooglePlusG> Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
