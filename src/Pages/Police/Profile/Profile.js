import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PoliceNavbar from '../PoliceDashboard/PoliceNavbar';

const Profile = () => {
	const [user, loading, error] = useAuthState(auth);
	let name, accountType;
	if(user){
		const doc = JSON.parse(user?.displayName);
		name = doc?.name;
		accountType = doc?.accountType;
	}
	
	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			<h2 className='text-center text-3xl my-10 font-semibold'>Your Profile</h2>

			<div className='mx-4'>
				<div class="card  md:w-fit lg:w-fit bg-white shadow-xl mx-auto p-6 md:p-10 lg:p-10">
				{
						user?
						<>
							<p className='mb-2 sm:text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Your Name:</span> {name}</p>
							<p className='mb-2 sm:text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Your Email:</span> {user.email}</p>
							<p className='mb-2 sm:text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Account Type:</span> {accountType}</p>
							<button onClick={() => {
								signOut(auth);
							}} className='btn btn-primary w-fit mx-auto mt-5 text-white'>Log out</button>
						</>
						:
						<Loading></Loading>
				}
				</div>
			</div>
		</div>
	);
};

export default Profile;