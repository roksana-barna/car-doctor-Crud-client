import React, { useContext } from 'react';
import signup from "../assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const SignUP = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmpassword=form.password.value;
        const name=form.name.value;
        console.log(name,email,password,confirmpassword)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .then(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <div className='mr-12'>
                        <img src={signup} alt="" />

                    </div>          </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                       
                        <h1 className="text-3xl  text-center font-bold">SignUp!</h1>
                        <form onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
        
                            </label>
                            <span className="label-text"> Confirm Password</span>

                            <input type="password" placeholder=" confirm password" name="confirmpassword" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign UP" />
                        </div>
                        <p>Already have an account?please <Link className='text-orange-500' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;