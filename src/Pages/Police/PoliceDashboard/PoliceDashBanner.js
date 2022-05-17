import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner3 from '../../../asset/images/banner3.jpg';

const PoliceDashBanner = () => {
	const navigate = useNavigate();
	return (
		<div class="hero min-h-screen" style={{backgroundImage: `url(${banner3})`}}>
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold text-center text-white">Welcome</h1>
					<p class="mb-5 text-center text-white">Please Register your Police Information.</p>
					<button onClick={ () => {
						navigate('/policeRegister');
					}} class="btn btn-primary text-white">Register</button>
				</div>
			</div>
		</div>
	);
};

export default PoliceDashBanner;