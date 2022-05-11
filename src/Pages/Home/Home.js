import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import banner from '../../asset/images/banner1.jpg';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Home = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	

	if(loading){
		return <div style={{height:'100vh'}} className='flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}

	if(user){
		const doc = JSON.parse(user?.displayName);
		if(doc?.accountType === 'user'){
			navigate('/userDashboard');
		} else if(doc?.accountType === 'police'){
			navigate('/policeDashboard');
		}
	}

	return (
		<div class="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl text-white font-bold">Welcome to Police Identification</h1>
					<p class="mb-5 text-white">Find the information about police by using Rang Id.</p>
					<button onClick={() => {
						navigate('/signup')
					}} class="btn btn-primary text-white">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Home;