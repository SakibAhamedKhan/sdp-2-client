import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import banner3 from '../../../asset/images/banner3.jpg';
import auth from '../../../firebase.init';
import useIsPoliceRegistered from '../../../hooks/police/useIsPoliceRegistered';
import Loading from '../../Shared/Loading/Loading';

const PoliceDashBanner = () => {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);
	const [registered, policeRegisteredInfo, policeRegLoading] = useIsPoliceRegistered(user);

	
	if(loading || policeRegLoading){
		return <div className='w-screen h-screen flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}
	return (
		<div class="hero min-h-screen" style={{backgroundImage: `url(${banner3})`}}>
			<div class="hero-overlay bg-opacity-45"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					
					{
						registered?
						<>
							<h1 class="mb-5 text-5xl font-bold text-center text-white">Well Done</h1>
							<p class="mb-5 text-center text-white">Your Police Registratoin is Completed.</p>
							<button  className='btn disabled'>Already Registered</button>
						</>
						:
						<>
							<h1 class="mb-5 text-5xl font-bold text-center text-white">Welcome</h1>
							<p class="mb-5 text-center text-white">Please Register your Police Information.</p>
							<button onClick={ () => {
							navigate('/policeRegister');
							}} class="btn btn-primary text-white">Register</button>
						</>
					}
				</div>
			</div>
		</div>
	);
};

export default PoliceDashBanner;