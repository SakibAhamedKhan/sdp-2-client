import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../asset/images/banner1.jpg';

const Home = () => {
	const navigate = useNavigate();
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