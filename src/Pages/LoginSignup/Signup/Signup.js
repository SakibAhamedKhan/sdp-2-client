import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
	const [
		createUserWithEmailAndPassword,
		emailUser,
		emailLoading,
		emailError,
	  ] = useCreateUserWithEmailAndPassword(auth);

	const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
	const navigate = useNavigate();
	
	let errorElement;
	if(emailError){
		errorElement = <div>
			<p className='label-text-alt ml-1 text-red-600'>{emailError?.message}</p>
		</div>;
	}
	
	if(emailLoading || updating){
		return <div style={{height:'100vh'}} className='flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}
	if(emailUser){
		console.log(emailUser.user);
		const doc = JSON.parse(emailUser?.user?.displayName);
		if(doc?.accountType === 'user'){
			navigate('/userDashboard')
		} else if(doc?.accountType === 'police'){
			navigate('/policeDashboard');
		} else{
			return <div style={{height:'100vh'}} className='flex justify-center items-center'>
				<Loading></Loading>
			</div>;
		}
	}
	const handleSubmit = async(event) => {
		event.preventDefault();
		errorElement = '';
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const selectAccountType = event.target.selectAccountType.value;
		console.log(name, email, password, selectAccountType);
		await createUserWithEmailAndPassword(email, password);
		const doc = {
			name: name,
			accountType: selectAccountType
		}
		updateProfile({displayName: JSON.stringify(doc)});
	}
	return (
		<div className='my-20'>
			<form onSubmit={handleSubmit} style={{
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
			}} className='w-72 md:w-96 lg:w-96 mx-auto bg-white p-8 rounded-xl'>
				<h2 className='text-center text-xl mb-4 font-bold' >Sign up Now!</h2>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Name</span>
					</label>
					<input type="text" placeholder="name" name='name' class="input input-bordered" required/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input type="email" placeholder="email" name='email' class="input input-bordered" required/>
				</div>
				<div className='form-control'>
					<label class="label">
							<span class="label-text">Sign up as a</span>
						</label>
					<select class="select w-full max-w-xs select-bordered" name='selectAccountType' required>
						<option value="" >Select</option>
						<option value="user">User</option>
						<option value="police">Police</option>
					</select>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Password</span>
					</label>
					<input type="password" placeholder="password" name='password' class="input input-bordered" required/>
					<label class="label">
						<p class="label-text-alt">Already have an account? <Link to='/login' className='text-blue-600 font-bold'>Log in</Link></p>
					</label>
					{
						errorElement
					}
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary text-white">Sign up</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;