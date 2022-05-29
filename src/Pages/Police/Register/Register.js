import React, { useState } from 'react';
import PoliceNavbar from '../PoliceDashboard/PoliceNavbar';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const Register = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const [uploading, setUploading] = useState(false);

	const image_key = '0cd588ba1e152646a09f8f7beda7931c';
	let photo;
	const handleFile = event => {
		console.log(event.target.files[0]);
		photo = event.target.files[0];
		
	}

	const handleSubmit = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const rangId =  event.target.rangId.value;
		const responsibility = event.target.responsibility.value;
		const thana = event.target.thana.value;
		const phone = event.target.phone.value;
		console.log(name, rangId, responsibility, thana, phone);
		

		const formData = new FormData();
		formData.append('image', photo);
		console.log(formData);
		fetch(`https://api.imgbb.com/1/upload?key=${image_key}`,{
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(data => {
			if(data.success){
				console.log(data);
				const img = data.data.url;
				const doc = {
					name,
					rangId, 
					responsibility,
					thana,
					phone,
					email: user?.email,
					image: img
				}
				fetch('https://limitless-tor-92243.herokuapp.com/policeRegister', {
					method:'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(doc)
				})
				.then(res => res.json())
				.then(async(data) => {
					if(data.found) {
						await Swal.fire(
							'Ops!',
							'Your Range ID is already Registered!',
							'error'
						  )
					} else if(data.AlreadyReg){
					await Swal.fire(
							'Ops',
							'You have already Registered',
							'error'
						  )
					} else{
						await Swal.fire(
							'Good job!',
							'Your Registration is Done',
							'success'
						  )
						  navigate('/policeDashboard');
					}
					
					setUploading(false);
				});
			}
			setUploading(false);
		})

	}
	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			
				<div class="card w-3/4 md:w-3/5 lg:w-2/5 bg-white shadow-xl mx-auto mt-10 mb-20">
					<h2 className='text-center text-primary text-2xl font-bold mt-5'>Register</h2>
					<div className='mt-5 mb-7'>
						<form className='grid grid-cols-1 gap-y-4 justify-items-center items-center px-4' onSubmit={handleSubmit}>
							<input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"  required/>
							<input name='rangId' type="text" placeholder="Your Rang ID" class="input input-bordered w-full max-w-xs"  required/>
							{/* <input type="text" placeholder="Responsibility" class="input input-bordered w-full max-w-xs" /> */}
							<select name='responsibility' class="select select-bordered w-full max-w-xs text-slate-500" required>
								<option value=''>Responsibility</option>
								<option value='Inspector'>Inspector</option>
								<option value='SI'>SI</option>
								<option value='ASI'>ASI</option>
								<option value='Constable'>Constable</option>
							</select>
							{/* <input type="text" placeholder="Thana" class="input input-bordered w-full max-w-xs"  required/> */}
							<select name='thana' class="select select-bordered w-full max-w-xs text-slate-500" required>
								<option value='' className='text-slate-300' >Thana</option>
								<option value='Chandgaon'>Chandgaon</option>
								<option value='Bondor'>Bondor</option>
								<option value='Double Mooring'>Double Mooring</option>
								<option value='Patenga'>Patenga</option>
								<option value='Kotwali'>Kotwali</option>
								<option value='Pahartali'>Pahartali</option>
								<option value='Panchlaish'>Panchlaish</option>
								<option value='Bakalia'>Bakalia</option>
								<option value='Karnafuli'>Karnafuli</option>
								<option value='Halishahar'>Halishahar</option>
								<option value='Khulshi'>Khulshi</option>
							</select>
							<input name='phone' type="number" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs"  required/>
							<input onBlur={handleFile} type="file" placeholder="tool photo" class="input input-bordered w-full max-w-xs mb-3 h-14 pt-3"/>
							<input name='' type="submit" value="Submit" className='btn btn-primary text-white px-5'  required/>
						</form>
					</div>
				</div>
		</div>
	);
};

export default Register;