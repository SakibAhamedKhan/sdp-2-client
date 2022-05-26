import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../UserDashboard/UserNavbar';

const Thana = () => {
	const [thana, setThana] = useState([]);
	const navigate = useNavigate();

	useEffect( () => {
		fetch('https://limitless-tor-92243.herokuapp.com/thana')
		.then(res => res.json())
		.then(data => {
			setThana(data);
		})
	},[]);

	console.log(thana);
	return (
		<div>
			<UserNavbar></UserNavbar>
			<h2 className='text-center text-3xl my-10 font-semibold'>All Thana in Chittagong</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{
				thana?.map(t => <div key={t._id}
				className="mx-auto my-10 px-5"
				>
					<div class="card w-80 bg-white shadow-xl">
						<div class="card-body items-center text-center">
							<h2 class="text-2xl font-bold">{t.thana_name}</h2>
							<div class="card-actions">
							<button onClick={() => {
								navigate(`/thanaDetails/${t._id}`)
							}} class="btn btn-primary text-white mt-5">Check Now</button>
							</div>
						</div>
					</div>
				</div>)
			}
			</div>

		</div>
	);
};

export default Thana;