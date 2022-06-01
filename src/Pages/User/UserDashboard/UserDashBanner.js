import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import banner1 from '../../../asset/images/banner2.jpg'

const UserDashBanner = () => {
	const navigate = useNavigate();
	const [seacrhResult , setSearchResult] = useState({});
	const [show, setShow] = useState(false);

	const handleSearch = (event) => {
		event.preventDefault();
		const search = event.target.search.value;

		if(search){
			fetch(`https://limitless-tor-92243.herokuapp.com/policeSearch/${search}`)
			.then(res => {
				console.log(res);
				return res.json();
			})
			.then(data => {
				console.log(data);
				
				if(data.data){
					Swal.fire(
						'Ops!',
						'You Search a wrong Range Id!',
						'error'
					  )
				} else{
					setSearchResult(data);
					setShow(true);
				}
					
					
			})
		}
		else {
			Swal.fire(
				'Ops!',
				'Something going wrong!',
				'error'
			  )
		}
	}

	return (
		<div class="hero" style={{backgroundImage: `url(${banner1})`,height:'90vh'}}>
			<div class="hero-overlay bg-opacity-45"></div>
			<div class="hero-content text-center text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-2xl font-semibold text-center text-white">Search Police By Range ID</h1>
					
					<div class="form-control">
						<div class="input-group">
							<form onSubmit={handleSearch} className='flex items-center'>
								<input  name='search' type="text" placeholder="Enter Police Range ID..." class="input input-bordered w-96 text-xl text-black h-12" required />
								<button type='submit' class="btn btn-square btn-primary text-white w-16 p-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>


			{/* modal */}
			<input checked={show} type="checkbox" id="my-modal-3" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box relative">
					<button onClick={() => setShow(false)} class="btn btn-sm btn-circle absolute right-2 top-2 text-white">✕</button>
					<h3 class="text-lg font-bold">Your Search By Range ID:</h3>
					
					<div className='mx-auto'>
					<div class="avatar my-5 ">
						<div class="w-24 mask mask-squircle">
							<img src={seacrhResult.image} />
						</div>
					</div>
					<p>Police Name: {seacrhResult.name}</p>
					<p>Range Id: {seacrhResult.rangId}</p>
					<p>Responsibility: {seacrhResult.responsibility}</p>
					<p>Thana: {seacrhResult.thana}</p>
					<p>Phone: {seacrhResult.phone}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashBanner;