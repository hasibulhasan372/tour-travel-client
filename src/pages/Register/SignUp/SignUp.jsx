import { useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { TbFidgetSpinner } from 'react-icons/tb';
import { FaGooglePlusG } from 'react-icons/fa';
import { savedUser } from '../../../API/auth';

const SignUp = () => {
    const { createUser, googleSignIn, loading, setLoading, updateProfileInfo, logOut } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0];
        
        const formData = new FormData();
        formData.append("image", photo);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_PHOTO_STORED_KEY}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image = imageData.data.display_url;
                createUser(email, password)
                    .then(result => {
                            updateProfileInfo(name, image)
                                .then(() => { 
                                    // User Put API Called 
                                    savedUser(result.user)
                                    if(result.user.email){
                                        
                                        setLoading(false);
                                        alert("Sign Up Successful");
                                        logOut()
                                        navigate("/login")
                                    }
                                })
                                .catch(error => {
                                    setError("Email or Password does not match", error);
                                    setLoading(false);
                                })
                    })
                    .catch(error => {
                        setError("Email or Password does not match", error)
                        setLoading(false)
                    })
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
                        title: 'Login Successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    navigate('/login')
                }
            })
            .catch(error => {
                setLoading(false)
                console.log(error.message);
            })

    }

    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Choose Photo</span>
                                </label>
                                <input type="file" name="photo" placeholder="photo" className="" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className=' bg-yellow-500 py-2 rounded-lg text-center text-white text-xl font-bold' type='submit'>{loading ? <TbFidgetSpinner size={24} className='text-slate-700 m-auto animate-spin'></TbFidgetSpinner> : "Sign Up"}
                                </button>
                            </div>
                            <div>
                                <h2>{error}</h2>
                                <p>Have no account? <Link to="/login" className='text-blue-500 font-semibold'>Login</Link></p>
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

export default SignUp;
