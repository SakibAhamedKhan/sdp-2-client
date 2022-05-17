import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../asset/images/banner2.jpg'

const UserDashBanner = () => {
	const navigate = useNavigate();

	return (
		<div class="hero" style={{backgroundImage: `url(${banner1})`,height:'90vh'}}>
			<div class="hero-overlay bg-opacity-45"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-2xl font-semibold text-center text-white">Search Police By Range ID</h1>
					
					<div class="form-control">
						<div class="input-group">
							<input type="text" placeholder="Enter Police Range ID..." class="input input-bordered w-96 text-xl text-black" required />
							<button class="btn btn-square btn-primary text-white w-16">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashBanner;