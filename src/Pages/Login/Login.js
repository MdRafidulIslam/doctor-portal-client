import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn, googleSignIn, resetPassword } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm()
    const location = useLocation()
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('')

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }
    const handleLogin = data => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)
                toast.success('login created successful')
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
        console.log(data)
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }

    const handleResetPassword = () => {
        if (!userEmail) {
            toast.error('Please enter your email address')
            return;
        }
        resetPassword(userEmail)
            .then(() => {
                toast.success('Password reset email sent . Please check your email')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className="text-2xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs" onBlur={handleEmailBlur} >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: "password has should be 6 chraracter" }
                        })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <button onClick={handleResetPassword}><span className="label-text">Forget Password?</span></button>
                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full uppercase' onClick={handleGoogleSignIn}>continue with google</button>
            </div>
        </div>
    );
};

export default Login;