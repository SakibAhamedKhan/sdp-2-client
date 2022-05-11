import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
	const navigate = useNavigate();
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);
	
	let errorElement;

	if(error){
		errorElement = <div>
			<p className='label-text-alt ml-1 text-red-600'>{error?.message}</p>
		</div>;
	}
	
	if(user){
		const doc = JSON.parse(user.user.displayName);
		if(doc?.accountType === 'user'){
			navigate('/userDashboard')
		} else if(doc?.accountType === 'police'){
			navigate('/policeDashboard');
		}
	}
	if(loading){
		return <div style={{height:'100vh'}} className='flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}
	const handleSubmit = async(event) => {
		event.preventDefault();
		errorElement = '';
		const email = event.target.email.value;
		const password = event.target.password.value;
		await signInWithEmailAndPassword(email, password);
	}
	return (
		<div className='my-20'>
			<form onSubmit={handleSubmit} style={{
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
			}} className='w-72 md:w-96 lg:w-96 mx-auto bg-white p-8 rounded-xl'>
				<h2 className='text-center text-xl mb-4 font-bold' >Welcome to Log in</h2>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input type="email" placeholder="email" name='email' class="input input-bordered" required/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Password</span>
					</label>
					<input type="password" placeholder="password" name='password' class="input input-bordered" required/>
					<label class="label">
						<p class="label-text-alt">Don't have an account? <Link to='/signup' className='text-blue-600 font-bold'>Sign up</Link></p>
					</label>
					{
						errorElement
					}
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary text-white">Log in</button>
				</div>
			</form>
		</div>
	);
};

export default Login;